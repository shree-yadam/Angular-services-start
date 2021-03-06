import { Component } from '@angular/core';
import { AccountsService } from '../shared/accounts.service';
import { LoggingService } from '../shared/logging.service';

@Component({
  selector: 'app-new-account',
  templateUrl: './new-account.component.html',
  styleUrls: ['./new-account.component.css']
})
export class NewAccountComponent {


  constructor(private loggingService: LoggingService,
    private accountsService: AccountsService) {}

  onCreateAccount(accountName: string, accountStatus: string) {
    // this.loggingService.logStatusChange(accountStatus);
    this.accountsService.addAccount(accountName, accountStatus);
  }
}
