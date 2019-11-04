import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';
import {CourseService} from '../course.service'

@Component({
  selector: 'app-find-courses',
  templateUrl: './find-courses.component.html',
  styleUrls: ['./find-courses.component.css']
})
export class FindCoursesComponent implements OnInit {

  submit = false;
  totalScore: any;

  isResults = false;
  form: any;
  returnedData:[];

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

  constructor(private serv: CourseService) { }

  ngOnInit() {
  }

  onSubmit(f: NgForm) {
    this.submit = true;
    // console.log(f.value);
    // this.total(f)
    this.addCourse(f);
    this.form = f.value;
  }
  // getCourse(){
  //   this.serv.getConfig()
  //     .subscribe((data) => {
  //       console.log(data);
  //   })
  // }

  addCourse(f){
    this.total(f);
    let score = {
      aps_score: this.totalScore.toString()
    }
    let score1 = JSON.stringify(score);
    console.log(score1)
    this.serv.postConfig(score1).subscribe(data => {
      // data = [
      //   {university_name: 'uj', course_name:'LO'},
      //   {university_name: 'upe', course_name:'Maths'},
      // ];
      this.returnedData = data;
      console.log(data);
    });
  }

  total(f) {
    this.totalScore = this.score(f.value.mark1) + this.score(f.value.mark2) +
    this.score(f.value.mark3) + this.score(f.value.mark4) + this.score(f.value.mark5) +
    this.score(f.value.mark6);
    console.log(this.totalScore);
  }

  score(e) {
    e = Number(e);
    if (e && typeof e === "number" && e > -1) {
        if(e >= 80) {
          return 7;
        } else if (e > 69 && e < 80) {
           return 6;
        } else if (e > 59 && e < 70) {
          return 5;
        } else if (e > 49 && e < 60) {
          return 4;
        } else if(e > 39 && e < 50) {
          return 3;
        } else if (e > 29 && e < 40) {
           return 2;
        } else if (e >= 0 && e < 30) {
          return 1;
        }
    } else {
      return 0;
    }
  }
}
