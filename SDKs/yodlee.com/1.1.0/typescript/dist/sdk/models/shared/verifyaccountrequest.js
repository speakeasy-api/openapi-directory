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
exports.VerifyAccountRequestInput = exports.VerifyAccountRequestContainerEnum = void 0;
var utils_1 = require("../../../internal/utils");
var verifytransactioncriteria_1 = require("./verifytransactioncriteria");
var VerifyAccountRequestContainerEnum;
(function (VerifyAccountRequestContainerEnum) {
    VerifyAccountRequestContainerEnum["Bank"] = "bank";
    VerifyAccountRequestContainerEnum["CreditCard"] = "creditCard";
    VerifyAccountRequestContainerEnum["Investment"] = "investment";
    VerifyAccountRequestContainerEnum["Insurance"] = "insurance";
    VerifyAccountRequestContainerEnum["Loan"] = "loan";
    VerifyAccountRequestContainerEnum["Reward"] = "reward";
    VerifyAccountRequestContainerEnum["RealEstate"] = "realEstate";
    VerifyAccountRequestContainerEnum["OtherAssets"] = "otherAssets";
    VerifyAccountRequestContainerEnum["OtherLiabilities"] = "otherLiabilities";
})(VerifyAccountRequestContainerEnum = exports.VerifyAccountRequestContainerEnum || (exports.VerifyAccountRequestContainerEnum = {}));
var VerifyAccountRequestInput = /** @class */ (function (_super) {
    __extends(VerifyAccountRequestInput, _super);
    function VerifyAccountRequestInput() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=accountId" }),
        __metadata("design:type", Number)
    ], VerifyAccountRequestInput.prototype, "accountId", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=container" }),
        __metadata("design:type", String)
    ], VerifyAccountRequestInput.prototype, "container", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=transactionCriteria", elemType: verifytransactioncriteria_1.VerifyTransactionCriteriaInput }),
        __metadata("design:type", Array)
    ], VerifyAccountRequestInput.prototype, "transactionCriteria", void 0);
    return VerifyAccountRequestInput;
}(utils_1.SpeakeasyBase));
exports.VerifyAccountRequestInput = VerifyAccountRequestInput;
