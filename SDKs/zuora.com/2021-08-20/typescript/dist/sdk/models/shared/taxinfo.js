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
exports.TaxInfo = exports.TaxInfoExemptStatusEnum = void 0;
var utils_1 = require("../../../internal/utils");
var TaxInfoExemptStatusEnum;
(function (TaxInfoExemptStatusEnum) {
    TaxInfoExemptStatusEnum["No"] = "No";
    TaxInfoExemptStatusEnum["Yes"] = "Yes";
    TaxInfoExemptStatusEnum["PendingVerification"] = "PendingVerification";
})(TaxInfoExemptStatusEnum = exports.TaxInfoExemptStatusEnum || (exports.TaxInfoExemptStatusEnum = {}));
// TaxInfo
/**
 * Information about the tax exempt status of a customer account.
 *
**/
var TaxInfo = /** @class */ (function (_super) {
    __extends(TaxInfo, _super);
    function TaxInfo() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=VATId" }),
        __metadata("design:type", String)
    ], TaxInfo.prototype, "vatId", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=companyCode" }),
        __metadata("design:type", String)
    ], TaxInfo.prototype, "companyCode", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=exemptCertificateId" }),
        __metadata("design:type", String)
    ], TaxInfo.prototype, "exemptCertificateId", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=exemptCertificateType" }),
        __metadata("design:type", String)
    ], TaxInfo.prototype, "exemptCertificateType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=exemptDescription" }),
        __metadata("design:type", String)
    ], TaxInfo.prototype, "exemptDescription", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=exemptEffectiveDate" }),
        __metadata("design:type", Date)
    ], TaxInfo.prototype, "exemptEffectiveDate", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=exemptExpirationDate" }),
        __metadata("design:type", Date)
    ], TaxInfo.prototype, "exemptExpirationDate", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=exemptIssuingJurisdiction" }),
        __metadata("design:type", String)
    ], TaxInfo.prototype, "exemptIssuingJurisdiction", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=exemptStatus" }),
        __metadata("design:type", String)
    ], TaxInfo.prototype, "exemptStatus", void 0);
    return TaxInfo;
}(utils_1.SpeakeasyBase));
exports.TaxInfo = TaxInfo;
