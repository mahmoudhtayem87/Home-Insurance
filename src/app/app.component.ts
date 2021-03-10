import { AfterViewInit, Component } from '@angular/core';
import LiferayParams from '../types/LiferayParams';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { DataField, FieldMap, FormFieldValue } from "./types/fieldMap";
import { stringify } from '@angular/core/src/util';
import { FormsFieldsConfigurations } from './fieldsMapping/autoInsuranceForm';
import { config } from 'rxjs';
import { Vehicles } from './data/vehiclesData';
import { SubmitLocation } from './types/submitLocation';
import {Labels} from './data/labels';

declare const Liferay: any;
declare const $: any;

@Component({
	templateUrl:
		Liferay.ThemeDisplay.getPathContext() +
		'/o/InsuranceQouteCalulatorHome/app/app.component.html'
})
export class AppComponent implements AfterViewInit{
	
	public AutoInsuranceFormID = "44012";
	public autoInsuranceServiceURL = "o/data-engine/v2.0/data-definitions/43505/data-records?p_auth=";
	public Countries: Array<any>;
	public _FormsFieldsConfig: FormsFieldsConfigurations = new FormsFieldsConfigurations();
	public _VehiclesMakes = new Vehicles();
	public Rate: number = 0.025;
	public get Quotation() {
		return (parseFloat(this.QuoteForm.get("PropertyValue").value)  ) * this.Rate;
	}
	params: LiferayParams;
	labels: any;
	public Labels:Labels = new Labels();
	QuoteForm = new FormGroup({});
	public showThankYouScreen : boolean = false;
	constructor(public http: HttpClient) {
		this.labels = {

			configuration: Liferay.Language.get('configuration'),
			portletNamespace: Liferay.Language.get('portlet-namespace'),
			contextPath: Liferay.Language.get('context-path'),
			portletElementId: Liferay.Language.get('portlet-element-id'),
		}
		this.loadCountries();
		this.QuoteForm = new FormGroup
			({
				CustomerType: new FormControl('', Validators.required),
				PropertyType: new FormControl('', Validators.required),
				Coverage: new FormControl('', Validators.required),
				PropertyValue: new FormControl('', Validators.required),

				FirstName: new FormControl('', Validators.required),
				LastName: new FormControl('', Validators.required),
				Email: new FormControl('', Validators.required),
				Mobile: new FormControl('', Validators.required),
				DateOfBirth: new FormControl('', Validators.required),
				Nationality: new FormControl('', Validators.required)
			});

	}
	//get base url from liferay JavaScript Object
	public get baseServerURL()
	{
		return Liferay.ThemeDisplay.getPortalURL();
	}
	public loadCountries() {
		this.http.get("https://restcountries.eu/rest/v2/all").subscribe(result => {
			this.Countries = result as Array<any>;
		});
	}
	public ngAfterViewInit() {
		$("#HomeQuotationSlider").carousel('pause');
	}
	public get Controls() { return this.QuoteForm.controls; }
	get configurationJSON() {
		return JSON.stringify(this.params.configuration, null, 2);
	}
	validateAllFormFields(formGroup: FormGroup) {
		Object.keys(formGroup.controls).forEach(field => {
			const control = formGroup.get(field);
			if (control instanceof FormControl) {
				control.markAsTouched({ onlySelf: true });
			} else if (control instanceof FormGroup) {
				this.validateAllFormFields(control);
			}
		});
	}
	//generate the service post url - Forms 
	public get URL_API_autoInsuranceService_New() {
		return `${this.baseServerURL}/o/headless-form/v1.0/forms/${this.params.configuration.system["AutoInsuranceFormID"]}/form-records?p_auth=${Liferay.authToken}`;
	}
	//generate the service post url - Forms 
	public get URL_API_autoInsuranceService_AppBuilder_New() {
		return `${this.baseServerURL}/o/data-engine/v2.0/data-definitions/${this.params.configuration.system["AppBuilderObjectID"]}/data-records?p_auth=${Liferay.authToken}`;
	}
	public get submitLocation() {
		return this.params.configuration.system["SubmitDataTo"] == "B" ?
			SubmitLocation.FormsBuilder : SubmitLocation.AppBuilder;
	}
	public next() {
		this.validateAllFormFields(this.QuoteForm);
		$("#HomeQuotationSlider").carousel('next')
	}
	public back() {
		this.validateAllFormFields(this.QuoteForm);
		$("#HomeQuotationSlider").carousel('prev');
	}
	public onSubmit() {
		this.validateAllFormFields(this.QuoteForm);
		if (this.QuoteForm.valid) {
			if (this.submitLocation == SubmitLocation.FormsBuilder) {
				this.submitToServer_FormsAPIs(this.QuoteForm);
			}
			else {
				this.submitToServer_AppBuilderAPIs(this.QuoteForm);
			}
		} else {
			//console.log(this.QuoteForm.controls);
			//console.log("in valid");
		}
	}
	//Collect the data from the form and map it to the server side form field ID and generat the post data object
	public prepareServerDataObject(_FormGroup: FormGroup) {
		var DataObj = {};

		var newFieldValue = new FieldMap();
		newFieldValue.en_US = this.Quotation.toString();
		DataObj[this.params.configuration.system["ProposedQuotation"]] = newFieldValue;

		Object.keys(_FormGroup.controls).forEach(key => {
			var newFieldValue = new FieldMap();
			newFieldValue.en_US = _FormGroup.get(key).value;
			DataObj[this.params.configuration.system[key]] = newFieldValue;
		});
		return DataObj;
	}
	public prepareServerDataObject_FormsAPI(_FormGroup: FormGroup) {
		var DataObj: any[] = [];
		
		var newFieldValue = new FormFieldValue();
		newFieldValue.value = this.Quotation.toString();
		newFieldValue.name = this.params.configuration.system["ProposedQuotation"];
		DataObj.push(newFieldValue);

		Object.keys(_FormGroup.controls).forEach(key => {
			var newFieldValue = new FormFieldValue();
			newFieldValue.value = _FormGroup.get(key).value;
			newFieldValue.name = this.params.configuration.system[key];
			DataObj.push(newFieldValue);
		});
		return DataObj;
	}
	//if going to submit to App Builder Object use the below code
	public submitToServer_AppBuilderAPIs(_FormGroup: FormGroup) {
		var Data = this.prepareServerDataObject(_FormGroup);
		this.http.post(this.URL_API_autoInsuranceService_AppBuilder_New,
			{
				"dataRecordCollectionId": 0,
				"id": 0,
				"dataRecordValues": Data
			}
		).subscribe(result => {
			//this.QuoteForm.reset();
			this.showThankYouScreen = true;
		});
	}
	public get Language()
	{
		return Liferay.ThemeDisplay.getLanguageId();
	}
	public get AppLabels()
	{
		try
		{
			var labels = this.params.configuration.system["Labels"];
			//console.log(labels);
			if(labels == null || labels == "")
			{
				return this.Labels.Data["en_US"];
			}
			labels = JSON.parse(labels);
			if(labels[this.Language] == null || labels[this.Language]  == "")
			{
				return this.Labels.Data["en_US"];
			}
			return labels[this.Language];
		}
		catch(ex)
		{
			return this.Labels.Data["en_US"];
		}
		
	}
	
	//if going to submit to Form Instance Record use the below code
	public submitToServer_FormsAPIs(_FormGroup: FormGroup) {
		var Data = this.prepareServerDataObject_FormsAPI(_FormGroup);
		this.http.post(this.URL_API_autoInsuranceService_New,
			{
				"draft": false,
				"formFieldValues": Data
			},{
				headers:{"Accept-Language":this.DefaultLanguage}
			}
		).subscribe(result => {
			//this.QuoteForm.reset();
			this.showThankYouScreen = true;
		});
	}

	public get DefaultLanguage()
	{
		return Liferay.ThemeDisplay.getDefaultLanguageId().replace("_","-");
	}
}
