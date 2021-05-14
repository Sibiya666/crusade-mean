import { Component, OnInit } from '@angular/core';
import { MENU_LIST } from '../auth-constant';
import { MenuItem } from '../auth-interface';

@Component({
    selector: 'app-menu',
    templateUrl: './menu.component.html',
    styleUrls: ['./menu.component.scss'],
})
export class MenuComponent implements OnInit {
    public menuList: MenuItem[] = MENU_LIST;

    constructor() {}

    public ngOnInit(): void {}
}
