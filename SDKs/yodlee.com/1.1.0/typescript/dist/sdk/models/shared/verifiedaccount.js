"use strict";
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
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.VerifiedAccount = void 0;
var utils_1 = require("../../../internal/utils");
var banktransfercode_1 = require("./banktransfercode");
var accountholder_1 = require("./accountholder");
var VerifiedAccount = /** @class */ (function (_super) {
    __extends(VerifiedAccount, _super);
    function VerifiedAccount() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=accountNumber" }),
        __metadata("design:type", String)
    ], VerifiedAccount.prototype, "accountNumber", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=accountType" }),
        __metadata("design:type", String)
    ], VerifiedAccount.prototype, "accountType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=bankTransferCode", elemType: banktransfercode_1.BankTransferCode }),
        __metadata("design:type", Array)
    ], VerifiedAccount.prototype, "bankTransferCode", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=fullAccountNumber" }),
        __metadata("design:type", String)
    ], VerifiedAccount.prototype, "fullAccountNumber", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=holder", elemType: accountholder_1.AccountHolder }),
        __metadata("design:type", Array)
    ], VerifiedAccount.prototype, "holder", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=id" }),
        __metadata("design:type", Number)
    ], VerifiedAccount.prototype, "id", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=providerAccountId" }),
        __metadata("design:type", Number)
    ], VerifiedAccount.prototype, "providerAccountId", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=providerName" }),
        __metadata("design:type", String)
    ], VerifiedAccount.prototype, "providerName", void 0);
    return VerifiedAccount;
}(utils_1.SpeakeasyBase));
exports.VerifiedAccount = VerifiedAccount;
