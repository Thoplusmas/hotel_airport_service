import { Component, OnInit } from '@angular/core';
import { ApiListService } from 'src/app/services/apilist.service';
import { MessageService } from 'primeng/api';
import { LazyLoadEvent } from 'primeng/api';
import { IApiModel } from 'src/app/models/IApiModel'
import { Router } from '@angular/router';
import { ApiModel } from 'src/app/models/ApiModel';

@Component({
  selector: 'app-apilist-table',
  templateUrl: './apilist-table.component.html',
  styleUrls: ['./apilist-table.component.scss'],
  providers: [MessageService]
})
export class ApilistTableComponent implements OnInit {
  displayUploadDialog: boolean = false;

  loading: boolean;

  statuses: any[];

  distinctCount;
  data: IApiModel[];

  selectedApi: IApiModel;
  apiModelToAdd = new ApiModel();

  firstRow: number; // firstRow (offset) to be displayed in List
  rowsPerPage: number; // number of rows per page

  constructor(private apiListService: ApiListService,
              private messageService: MessageService,
              private router: Router) { }

  ngOnInit() {
    this.statuses = [
      { label: "DESIGN", value: "DESIGN" },
      { label: "SNAPSHOT", value: "SNAPSHOT" },
      { label: "RELEASE", value: "RELEASE" }
    ];
  }
}
