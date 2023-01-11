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
exports.ProcessingOptions = exports.ProcessingOptionsElectronicPaymentOptions = void 0;
var utils_1 = require("../../../internal/utils");
var billingoptions_1 = require("./billingoptions");
// ProcessingOptionsElectronicPaymentOptions
/**
 * Container for the electronic payment options.
**/
var ProcessingOptionsElectronicPaymentOptions = /** @class */ (function (_super) {
    __extends(ProcessingOptionsElectronicPaymentOptions, _super);
    function ProcessingOptionsElectronicPaymentOptions() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=paymentMethodId" }),
        __metadata("design:type", String)
    ], ProcessingOptionsElectronicPaymentOptions.prototype, "paymentMethodId", void 0);
    return ProcessingOptionsElectronicPaymentOptions;
}(utils_1.SpeakeasyBase));
exports.ProcessingOptionsElectronicPaymentOptions = ProcessingOptionsElectronicPaymentOptions;
// ProcessingOptions
/**
 * Invoice or Payment.
**/
var ProcessingOptions = /** @class */ (function (_super) {
    __extends(ProcessingOptions, _super);
    function ProcessingOptions() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=applicationOrder" }),
        __metadata("design:type", Array)
    ], ProcessingOptions.prototype, "applicationOrder", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=applyCredit" }),
        __metadata("design:type", Boolean)
    ], ProcessingOptions.prototype, "applyCredit", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=applyCreditBalance" }),
        __metadata("design:type", Boolean)
    ], ProcessingOptions.prototype, "applyCreditBalance", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=billingOptions" }),
        __metadata("design:type", billingoptions_1.BillingOptions)
    ], ProcessingOptions.prototype, "billingOptions", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=collectPayment" }),
        __metadata("design:type", Boolean)
    ], ProcessingOptions.prototype, "collectPayment", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=electronicPaymentOptions" }),
        __metadata("design:type", ProcessingOptionsElectronicPaymentOptions)
    ], ProcessingOptions.prototype, "electronicPaymentOptions", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=runBilling" }),
        __metadata("design:type", Boolean)
    ], ProcessingOptions.prototype, "runBilling", void 0);
    return ProcessingOptions;
}(utils_1.SpeakeasyBase));
exports.ProcessingOptions = ProcessingOptions;
