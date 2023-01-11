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
exports.GetSequenceSetResponse = void 0;
var utils_1 = require("../../../internal/utils");
var creditmemoentityprefix_1 = require("./creditmemoentityprefix");
var debitmemoentityprefix_1 = require("./debitmemoentityprefix");
var invoiceentityprefix_1 = require("./invoiceentityprefix");
var paymententityprefix_1 = require("./paymententityprefix");
var refundentityprefix_1 = require("./refundentityprefix");
var GetSequenceSetResponse = /** @class */ (function (_super) {
    __extends(GetSequenceSetResponse, _super);
    function GetSequenceSetResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=creditMemo" }),
        __metadata("design:type", creditmemoentityprefix_1.CreditMemoEntityPrefix)
    ], GetSequenceSetResponse.prototype, "creditMemo", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=debitMemo" }),
        __metadata("design:type", debitmemoentityprefix_1.DebitMemoEntityPrefix)
    ], GetSequenceSetResponse.prototype, "debitMemo", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=id" }),
        __metadata("design:type", String)
    ], GetSequenceSetResponse.prototype, "id", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=invoice" }),
        __metadata("design:type", invoiceentityprefix_1.InvoiceEntityPrefix)
    ], GetSequenceSetResponse.prototype, "invoice", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], GetSequenceSetResponse.prototype, "name", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=payment" }),
        __metadata("design:type", paymententityprefix_1.PaymentEntityPrefix)
    ], GetSequenceSetResponse.prototype, "payment", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=refund" }),
        __metadata("design:type", refundentityprefix_1.RefundEntityPrefix)
    ], GetSequenceSetResponse.prototype, "refund", void 0);
    return GetSequenceSetResponse;
}(utils_1.SpeakeasyBase));
exports.GetSequenceSetResponse = GetSequenceSetResponse;
