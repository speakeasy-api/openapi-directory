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
exports.PutWriteOffInvoiceResponse = exports.PutWriteOffInvoiceResponseCreditMemo = void 0;
var utils_1 = require("../../../internal/utils");
// PutWriteOffInvoiceResponseCreditMemo
/**
 * Container for the credit memo that is automatically generated when writing off invoices.
 *
**/
var PutWriteOffInvoiceResponseCreditMemo = /** @class */ (function (_super) {
    __extends(PutWriteOffInvoiceResponseCreditMemo, _super);
    function PutWriteOffInvoiceResponseCreditMemo() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=id" }),
        __metadata("design:type", String)
    ], PutWriteOffInvoiceResponseCreditMemo.prototype, "id", void 0);
    return PutWriteOffInvoiceResponseCreditMemo;
}(utils_1.SpeakeasyBase));
exports.PutWriteOffInvoiceResponseCreditMemo = PutWriteOffInvoiceResponseCreditMemo;
var PutWriteOffInvoiceResponse = /** @class */ (function (_super) {
    __extends(PutWriteOffInvoiceResponse, _super);
    function PutWriteOffInvoiceResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=creditMemo" }),
        __metadata("design:type", PutWriteOffInvoiceResponseCreditMemo)
    ], PutWriteOffInvoiceResponse.prototype, "creditMemo", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=success" }),
        __metadata("design:type", Boolean)
    ], PutWriteOffInvoiceResponse.prototype, "success", void 0);
    return PutWriteOffInvoiceResponse;
}(utils_1.SpeakeasyBase));
exports.PutWriteOffInvoiceResponse = PutWriteOffInvoiceResponse;
