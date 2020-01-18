import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTable } from '@angular/material/table';
import { TdetailDataSource, TdetailItem } from './tdetail-datasource';

@Component({
  selector: 'app-tdetail',
  templateUrl: './tdetail.component.html',
  styleUrls: ['./tdetail.component.css']
})
export class TdetailComponent implements AfterViewInit, OnInit {
  @ViewChild(MatPaginator, { static: false }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: false }) sort: MatSort;
  @ViewChild(MatTable, { static: false }) table: MatTable<TdetailItem>;
  dataSource: TdetailDataSource;

  /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
  displayedColumns = ['tfname',
    'tlname',
    'temail',
    'taddr',
    'tdob',
    'tqual',
    'tsex',
    'tsid',
    'tdoj',
    'tsub',
    'tclass',
    'tccode',
    'tphone',
    'taadhar',
    'tacname'];

  ngOnInit() {
    this.dataSource = new TdetailDataSource();
  }

  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
    this.table.dataSource = this.dataSource;
  }
}