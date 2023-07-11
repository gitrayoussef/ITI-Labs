var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Account = /** @class */ (function () {
    function Account(_acc_no, _balance) {
        if (_acc_no === void 0) { _acc_no = 0; }
        if (_balance === void 0) { _balance = 0; }
        this._acc_no = _acc_no;
        this._balance = _balance;
    }
    Account.prototype.debitAmount = function () {
        return "Debit Amount";
    };
    Account.prototype.creditAmount = function () {
        return "Credit Amount";
    };
    Account.prototype.getBalance = function () {
        return "Get Balance";
    };
    return Account;
}());
var Current_Account = /** @class */ (function (_super) {
    __extends(Current_Account, _super);
    function Current_Account(_acc_no, _balance, _interest_rate) {
        if (_acc_no === void 0) { _acc_no = 0; }
        if (_balance === void 0) { _balance = 0; }
        if (_interest_rate === void 0) { _interest_rate = 0; }
        var _this = _super.call(this, _acc_no, _balance) || this;
        _this._interest_rate = _interest_rate;
        return _this;
    }
    Current_Account.prototype.addCustomer = function () {
        return "Add new customer";
    };
    Current_Account.prototype.removeCustomer = function () {
        return "Remove customer";
    };
    return Current_Account;
}(Account));
var Min_Balance = /** @class */ (function (_super) {
    __extends(Min_Balance, _super);
    function Min_Balance(_acc_no, _balance, _min_balance) {
        if (_acc_no === void 0) { _acc_no = 0; }
        if (_balance === void 0) { _balance = 0; }
        if (_min_balance === void 0) { _min_balance = 0; }
        var _this = _super.call(this, _acc_no, _balance) || this;
        _this._min_balance = _min_balance;
        return _this;
    }
    Min_Balance.prototype.addCustomer = function () {
        return "Add new customer";
    };
    Min_Balance.prototype.removeCustomer = function () {
        return "Remove customer";
    };
    return Min_Balance;
}(Account));
