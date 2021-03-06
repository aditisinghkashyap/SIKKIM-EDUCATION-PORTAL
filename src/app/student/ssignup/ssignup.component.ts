import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm, FormControl, FormGroup, Validators } from '@angular/forms';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
import { SdetailDataSource, SdetailItem, EXAMPLE_DATA } from '../../school/class/sdetail/sdetail-datasource';
import { ngxCsv } from 'ngx-csv/ngx-csv';
import { Papa } from 'ngx-papaparse';

@Component({
  selector: 'app-ssignup',
  templateUrl: './ssignup.component.html',
  styleUrls: ['./ssignup.component.css'
  ]
})

export class SsignupComponent implements OnInit {
  signup: NgForm;
  genders = ['Male', 'Female'];
  studentdata = {
    sfname:'',
    slname:'',
    smfname:'',
    smlname:'',
    sffname:'',
    sflname: '',
    semail: '',
    saddr: '',
    ssex: '',
    ssid: '',
    sdob: '',
    sclass: '',
    sccode: '',
    sphone: '',
    saadhar: '',
    sweight: '',
    seyesight: '',
    spastdisease:'',

  }
  constructor(private StudentDetails: AngularFireDatabase) { }
  sdetail: AngularFireList<any>;

  getForm() {
    this.sdetail = this.StudentDetails.list('student/I' + this.studentdata.ssid);
    return this.sdetail.snapshotChanges();
  }

  


  ngOnInit() {
    this.getForm();
  }
  onSubmit(form: NgForm) {
    //console.log(form);
    this.studentdata.sfname = form.value.sfname;
    this.studentdata.slname = form.value.slname;
    this.studentdata.smfname =form.value.smfname;
    this.studentdata.smlname = form.value.smlname;
    this.studentdata.sffname = form.value.sffname;
    this.studentdata.sflname = form.value.sflname;
    this.studentdata.semail = form.value.semail;
    this.studentdata.saddr = form.value.saddr;
    this.studentdata.ssex = form.value.ssex;
    this.studentdata.ssid = form.value.ssid;
    this.studentdata.sdob = form.value.sdob;
    this.studentdata.sclass = form.value.sclass;
    this.studentdata.sccode = form.value.sccode;
    this.studentdata.sphone = form.value.sphone;
    this.studentdata.saadhar = form.value.saadhar;
    this.studentdata.sweight = form.value.sweight;
    this.studentdata.seyesight = form.value.seyesight;
    this.studentdata.spastdisease = form.value.spastdisease;
    alert('Thanks,your request has been recorded!');
    this.getForm();
    this.sdetail.push(form.value);
    EXAMPLE_DATA.push(form.value);
    form.reset;
  }
}
function voiceInputOver(val) {
  alert("Voice input is complete");
  alert("Your input is " + val);
}

