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
exports.UpdateTransactionInput = exports.UpdateTransactionContainerEnum = exports.UpdateTransactionCategorySourceEnum = void 0;
var utils_1 = require("../../../internal/utils");
var description_1 = require("./description");
var UpdateTransactionCategorySourceEnum;
(function (UpdateTransactionCategorySourceEnum) {
    UpdateTransactionCategorySourceEnum["System"] = "SYSTEM";
    UpdateTransactionCategorySourceEnum["User"] = "USER";
})(UpdateTransactionCategorySourceEnum = exports.UpdateTransactionCategorySourceEnum || (exports.UpdateTransactionCategorySourceEnum = {}));
var UpdateTransactionContainerEnum;
(function (UpdateTransactionContainerEnum) {
    UpdateTransactionContainerEnum["Bank"] = "bank";
    UpdateTransactionContainerEnum["CreditCard"] = "creditCard";
    UpdateTransactionContainerEnum["Investment"] = "investment";
    UpdateTransactionContainerEnum["Insurance"] = "insurance";
    UpdateTransactionContainerEnum["Loan"] = "loan";
    UpdateTransactionContainerEnum["Reward"] = "reward";
    UpdateTransactionContainerEnum["RealEstate"] = "realEstate";
    UpdateTransactionContainerEnum["OtherAssets"] = "otherAssets";
    UpdateTransactionContainerEnum["OtherLiabilities"] = "otherLiabilities";
})(UpdateTransactionContainerEnum = exports.UpdateTransactionContainerEnum || (exports.UpdateTransactionContainerEnum = {}));
var UpdateTransactionInput = /** @class */ (function (_super) {
    __extends(UpdateTransactionInput, _super);
    function UpdateTransactionInput() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=categoryId" }),
        __metadata("design:type", Number)
    ], UpdateTransactionInput.prototype, "categoryId", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=categorySource" }),
        __metadata("design:type", String)
    ], UpdateTransactionInput.prototype, "categorySource", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=container" }),
        __metadata("design:type", String)
    ], UpdateTransactionInput.prototype, "container", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=description" }),
        __metadata("design:type", description_1.DescriptionInput)
    ], UpdateTransactionInput.prototype, "description", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=memo" }),
        __metadata("design:type", String)
    ], UpdateTransactionInput.prototype, "memo", void 0);
    return UpdateTransactionInput;
}(utils_1.SpeakeasyBase));
exports.UpdateTransactionInput = UpdateTransactionInput;
