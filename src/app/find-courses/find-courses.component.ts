import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-find-courses',
  templateUrl: './find-courses.component.html',
  styleUrls: ['./find-courses.component.css']
})
export class FindCoursesComponent implements OnInit {

  submit = false;

  certificates = [
    'NCS - National Senior Certificate.',
    'SC HG - Senior Certificate Higher Grade.',
    'SC HG - Senior Certificate Standard Grade.'
  ];

  subjectInput = [
    'subject1',
    'subject2',
    'subject3',
    'subject4',
    'subject5',
    'subject6',
  ]

  subjects = [
    'Afrikaans',
    'English',
    'Indebele',
    'Northern Sesotho',
    'Southern Sesotho',
    'Swatting',
    'Tsonga',
    'seTswana',
    'Venda',
    'isiXhosa',
    'isiZulu',
    'Mathematics, Mathematical Literacy or Technical Mathematics',
    'Life Orientation',
    'Accounting',
    'Agricultural Management Practices',
    'Agricultural Sciences',
    'Agricultural Technology',
    'Business Studies',
    'Civil Technology',
    'Computer Applications Technology (previously Computer Studies Standard Grade - Literacy)',
    'Consumer Studies',
    'Dance Studies',
    'Design',
    'Dramatic Arts',
    'Economics',
    'Electrical Technology',
    'Engineering Graphics & Design',
    'Geography',
    'History',
    'Hospitality Studies (previously Home Economics)',
    'Information Technology (previously Computer Studies Higher Grade - Programming)',
    'Life Sciences (previously Biology)',
    'Mechanical Technology',
    'Music',
    'Physical Science',
    'Religion Studies',
    'Second Additional Language',
    'Third Additional Language',
    'Tourism',
    'Visual Arts'
  ];

  constructor() { }

  ngOnInit() {
  }

  onSubmit(f: NgForm) {
    this.submit = true;
    console.log(f.value);  // { first: '', last: '' }
    console.log(f.valid);  // false
  }

}
