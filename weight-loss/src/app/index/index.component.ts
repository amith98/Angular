import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { formatDate } from '@angular/common';


@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrl: './index.component.css'
})
export class IndexComponent {
  currentDateTime: Date = new Date();
  formattedDate: string = formatDate(new Date(), 'yyyy-MM-dd', 'en-US');
  formattedTime: string = formatDate(new Date(), 'HH:mm:ss', 'en-US');
  showInputDiv: boolean = true;
  showInputDivInitial: boolean = false;
  tableData: any;
  editFormVisible: boolean = false;
  editValueIndex: any;
  showWeightDiff: boolean = false;
  deleteValueIndex: any;
  isModalOpen = false;

  constructor(private router: Router, private route: ActivatedRoute) { }

  weightForm = new FormGroup({
    weightValue: new FormControl('', Validators.required)
  });

  editForm = new FormGroup({
    editWeightValue: new FormControl('', Validators.required)
  });

  weightDiffForm = new FormGroup({
    firstDateValue: new FormControl('', Validators.required),
    secondDateValue: new FormControl('', Validators.required),
    weightDifference: new FormControl({ value: '', disabled: true })

  });

  ngOnInit() {
    this.getTableData();
  }

  //Logic for pagination
  page = 1;
  pageSize = 3;
  get paginatedData() {
    const start = (this.page - 1) * this.pageSize;
    return this.tableData.slice(start, start + this.pageSize);
  }
  totalPages() {
    return Math.ceil(this.tableData.length / this.pageSize);
  }

  changePage(p: number) {
    if (p >= 1 && p <= this.totalPages()) {
      this.page = p;
    }
  }


  getTableData() {
    const userid = this.route.snapshot.params['userid'];
    const storedUserData = localStorage.getItem('usersData');
    let retrievedUsersData = storedUserData ? JSON.parse(storedUserData) : [];
    let retrievedUserDataLength = retrievedUsersData.length;
    for (let i = 0; i < retrievedUserDataLength; i++) {
      if (retrievedUsersData[i].userId == userid) {
        this.tableData = retrievedUsersData[i].userWeightData;
      }
    }

  }

  addWeight() {
    const userid = this.route.snapshot.params['userid'];
    const storedUserData = localStorage.getItem('usersData');
    let retrievedUsersData = storedUserData ? JSON.parse(storedUserData) : [];
    let retrievedUserDataLength = retrievedUsersData.length;
    for (let i = 0; i < retrievedUserDataLength; i++) {
      if (retrievedUsersData[i].userId == userid) {
        let loopUserWeightData = retrievedUsersData[i].userWeightData;
        let loopUserWeightDataLength = loopUserWeightData.length;
        if (loopUserWeightDataLength == 0) {
          this.showInputDiv = true;
          this.showInputDivInitial = true;
        } else {
          for (let j = 0; j < loopUserWeightDataLength; j++) {
            if (loopUserWeightData[j].currentDate == this.formattedDate) {
              this.showInputDiv = false;
            } else {
              this.showInputDiv = true;
              this.showInputDivInitial = true;
            }

          }
        }

      }
    }
  }

  addWeightData() {
    const userid = this.route.snapshot.params['userid'];
    const storedUserData = localStorage.getItem('usersData');
    let retrievedUsersData = storedUserData ? JSON.parse(storedUserData) : [];
    let retrievedUserDataLength = retrievedUsersData.length;
    let insertWeightData: boolean = true;

    const userDailyWeightValue = {
      weight: this.weightForm.value.weightValue,
      currentDate: this.formattedDate,
      currentTime: this.formattedTime
    };

    for (let i = 0; i < retrievedUserDataLength; i++) {
      if (retrievedUsersData[i].userId == userid) {
        let localUserWeight = retrievedUsersData[i].userWeightData;
        let localUserWeightLen = localUserWeight.length;
        for (let j = 0; j < localUserWeightLen; j++) {
          if (localUserWeight[j].currentDate == this.formattedDate) {
            this.showInputDiv = false;
            insertWeightData = false;
          }
        }
        if (insertWeightData) {
          retrievedUsersData[i].userWeightData.push(userDailyWeightValue);
        }
      }
    }
    localStorage.setItem('usersData', JSON.stringify(retrievedUsersData));
    this.getTableData();
    console.log(localStorage.getItem('usersData'));


  }
  //delete logic
  showConfirm(id: number) {
    this.deleteValueIndex = id;
    this.isModalOpen = true;
  }
  closeModal() {
    this.isModalOpen = false;
  }
   confirmDelete() {
    this.closeModal();
    this.delete(this.deleteValueIndex);
  }

  delete(index: any) {

    if (index > -1) {
      index = index + ((this.page - 1) * this.pageSize);
      const userid = this.route.snapshot.params['userid'];
      const storedUserData = localStorage.getItem('usersData');
      let retrievedUsersData = storedUserData ? JSON.parse(storedUserData) : [];
      let retrievedUserDataLength = retrievedUsersData.length;
      for (let i = 0; i < retrievedUserDataLength; i++) {
        if (retrievedUsersData[i].userId == userid) {
          retrievedUsersData[i].userWeightData.splice(index, 1);
        }
      }
      localStorage.setItem('usersData', JSON.stringify(retrievedUsersData));
      this.getTableData();
    }
  }
//edit logic
  edit(index: any) {
    this.editFormVisible = true;
    if (index > -1) {
      index = index + ((this.page - 1) * this.pageSize);
      const userid = this.route.snapshot.params['userid'];
      const storedUserData = localStorage.getItem('usersData');
      let retrievedUsersData = storedUserData ? JSON.parse(storedUserData) : [];
      let retrievedUserDataLength = retrievedUsersData.length;
      for (let i = 0; i < retrievedUserDataLength; i++) {
        if (retrievedUsersData[i].userId == userid) {
          this.editValueIndex = index;
          retrievedUsersData[i].userWeightData[index].weight;
          this.editForm.patchValue({
            editWeightValue: retrievedUsersData[i].userWeightData[index].weight
          });
        }
      }

    }
  }

  editWeightData() {
    const changedWeightValue = this.editForm.value.editWeightValue;
    const userid = this.route.snapshot.params['userid'];
    const storedUserData = localStorage.getItem('usersData');
    let retrievedUsersData = storedUserData ? JSON.parse(storedUserData) : [];
    let retrievedUserDataLength = retrievedUsersData.length;
    for (let i = 0; i < retrievedUserDataLength; i++) {
      if (retrievedUsersData[i].userId == userid) {
        retrievedUsersData[i].userWeightData[this.editValueIndex].weight = changedWeightValue;
      }
    }
    localStorage.setItem('usersData', JSON.stringify(retrievedUsersData));
    this.getTableData();
    this.editFormVisible = false;
  }

  editFormClose() {
    this.editFormVisible = false;
  }

  weightDiff() {
    this.showWeightDiff = true;
  }
  closeWeightDiff() {
    this.showWeightDiff = false;
    this.weightDiffForm.patchValue({
      firstDateValue: '',
      secondDateValue: '',
      weightDifference: ''
    });

  }
  calWeightDiff() {
    let firstDateValue = this.weightDiffForm.value.firstDateValue;
    let secondDateValue = this.weightDiffForm.value.secondDateValue;
    let firstDateValueWt = '';
    let secondDateValueWt = '';
    const userid = this.route.snapshot.params['userid'];
    const storedUserData = localStorage.getItem('usersData');
    let retrievedUsersData = storedUserData ? JSON.parse(storedUserData) : [];
    let retrievedUserDataLength = retrievedUsersData.length;
    for (let i = 0; i < retrievedUserDataLength; i++) {
      if (retrievedUsersData[i].userId == userid) {
        let localUserWeight = retrievedUsersData[i].userWeightData;
        let localUserWeightLen = localUserWeight.length;
        for (let j = 0; j < localUserWeightLen; j++) {
          if (localUserWeight[j].currentDate == firstDateValue) {
            firstDateValueWt = localUserWeight[j].weight;
          }
          if (localUserWeight[j].currentDate == secondDateValue) {
            secondDateValueWt = localUserWeight[j].weight;
          }
        }
      }
    }
    if (firstDateValueWt != '' && secondDateValueWt != '') {
      let diff = Number(firstDateValueWt) - Number(secondDateValueWt);
      this.weightDiffForm.patchValue({
        weightDifference: String(diff)
      });
    } else {
      this.weightDiffForm.patchValue({
        weightDifference: 'Weights not available for Input dates'
      });

    }

  }

  logout() {
    localStorage.removeItem('token');
    this.router.navigateByUrl('');
  }

}
