class Account {
  acc_no: number;
  balance: number;
  constructor(public _acc_no = 0, public _balance = 0) {}
  debitAmount() {
    return "Debit Amount";
  }
  creditAmount() {
    return "Credit Amount";
  }
  getBalance() {
    return "Get Balance";
  }
}

interface Acccount {
  date_of_opening: string;
  addCustomer();
  removeCustomer();
}

class Current_Account extends Account implements Acccount {
  date_of_opening: string;
  addCustomer() {
    return "Add new customer";
  }
  removeCustomer() {
    return "Remove customer";
  }
  constructor(_acc_no = 0, _balance = 0, public _interest_rate: number = 0) {
    super(_acc_no, _balance);
  }
}

class Min_Balance extends Account implements Acccount {
  date_of_opening: string;
  addCustomer() {
    return "Add new customer";
  }
  removeCustomer() {
    return "Remove customer";
  }
  constructor(_acc_no = 0, _balance = 0, public _min_balance: number = 0) {
    super(_acc_no, _balance);
  }
}
