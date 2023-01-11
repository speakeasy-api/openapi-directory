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
exports.GetPaymentRunDataElementResponse = exports.GetPaymentRunDataElementResponseResultEnum = exports.GetPaymentRunDataElementResponseDocumentTypeEnum = void 0;
var utils_1 = require("../../../internal/utils");
var getpaymentrundatatransactionelementresponse_1 = require("./getpaymentrundatatransactionelementresponse");
var GetPaymentRunDataElementResponseDocumentTypeEnum;
(function (GetPaymentRunDataElementResponseDocumentTypeEnum) {
    GetPaymentRunDataElementResponseDocumentTypeEnum["Invoice"] = "Invoice";
    GetPaymentRunDataElementResponseDocumentTypeEnum["DebitMemo"] = "DebitMemo";
})(GetPaymentRunDataElementResponseDocumentTypeEnum = exports.GetPaymentRunDataElementResponseDocumentTypeEnum || (exports.GetPaymentRunDataElementResponseDocumentTypeEnum = {}));
var GetPaymentRunDataElementResponseResultEnum;
(function (GetPaymentRunDataElementResponseResultEnum) {
    GetPaymentRunDataElementResponseResultEnum["Processed"] = "Processed";
    GetPaymentRunDataElementResponseResultEnum["Error"] = "Error";
})(GetPaymentRunDataElementResponseResultEnum = exports.GetPaymentRunDataElementResponseResultEnum || (exports.GetPaymentRunDataElementResponseResultEnum = {}));
var GetPaymentRunDataElementResponse = /** @class */ (function (_super) {
    __extends(GetPaymentRunDataElementResponse, _super);
    function GetPaymentRunDataElementResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=accountId" }),
        __metadata("design:type", String)
    ], GetPaymentRunDataElementResponse.prototype, "accountId", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=amount" }),
        __metadata("design:type", Number)
    ], GetPaymentRunDataElementResponse.prototype, "amount", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=amountCollected" }),
        __metadata("design:type", Number)
    ], GetPaymentRunDataElementResponse.prototype, "amountCollected", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=amountToCollect" }),
        __metadata("design:type", Number)
    ], GetPaymentRunDataElementResponse.prototype, "amountToCollect", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=comment" }),
        __metadata("design:type", String)
    ], GetPaymentRunDataElementResponse.prototype, "comment", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=documentId" }),
        __metadata("design:type", String)
    ], GetPaymentRunDataElementResponse.prototype, "documentId", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=documentType" }),
        __metadata("design:type", String)
    ], GetPaymentRunDataElementResponse.prototype, "documentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=errorCode" }),
        __metadata("design:type", String)
    ], GetPaymentRunDataElementResponse.prototype, "errorCode", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=errorMessage" }),
        __metadata("design:type", String)
    ], GetPaymentRunDataElementResponse.prototype, "errorMessage", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=paymentGatewayId" }),
        __metadata("design:type", String)
    ], GetPaymentRunDataElementResponse.prototype, "paymentGatewayId", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=paymentMethodId" }),
        __metadata("design:type", String)
    ], GetPaymentRunDataElementResponse.prototype, "paymentMethodId", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=result" }),
        __metadata("design:type", String)
    ], GetPaymentRunDataElementResponse.prototype, "result", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=transactions", elemType: getpaymentrundatatransactionelementresponse_1.GetPaymentRunDataTransactionElementResponse }),
        __metadata("design:type", Array)
    ], GetPaymentRunDataElementResponse.prototype, "transactions", void 0);
    return GetPaymentRunDataElementResponse;
}(utils_1.SpeakeasyBase));
exports.GetPaymentRunDataElementResponse = GetPaymentRunDataElementResponse;
