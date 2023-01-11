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
exports.GetPublicEmailTemplateResponse = exports.GetPublicEmailTemplateResponseToEmailTypeEnum = exports.GetPublicEmailTemplateResponseReplyToEmailTypeEnum = exports.GetPublicEmailTemplateResponseFromEmailTypeEnum = exports.GetPublicEmailTemplateResponseEncodingTypeEnum = exports.GetPublicEmailTemplateResponseCcEmailTypeEnum = void 0;
var utils_1 = require("../../../internal/utils");
var GetPublicEmailTemplateResponseCcEmailTypeEnum;
(function (GetPublicEmailTemplateResponseCcEmailTypeEnum) {
    GetPublicEmailTemplateResponseCcEmailTypeEnum["BillToContact"] = "BillToContact";
    GetPublicEmailTemplateResponseCcEmailTypeEnum["SoldToContact"] = "SoldToContact";
    GetPublicEmailTemplateResponseCcEmailTypeEnum["SpecificEmails"] = "SpecificEmails";
    GetPublicEmailTemplateResponseCcEmailTypeEnum["TenantAdmin"] = "TenantAdmin";
    GetPublicEmailTemplateResponseCcEmailTypeEnum["BillToAndSoldToContacts"] = "BillToAndSoldToContacts";
    GetPublicEmailTemplateResponseCcEmailTypeEnum["RunOwner"] = "RunOwner";
    GetPublicEmailTemplateResponseCcEmailTypeEnum["AllContacts"] = "AllContacts";
    GetPublicEmailTemplateResponseCcEmailTypeEnum["InvoiceOwnerBillToContact"] = "InvoiceOwnerBillToContact";
    GetPublicEmailTemplateResponseCcEmailTypeEnum["InvoiceOwnerSoldToContact"] = "InvoiceOwnerSoldToContact";
    GetPublicEmailTemplateResponseCcEmailTypeEnum["InvoiceOwnerBillToAndSoldToContacts"] = "InvoiceOwnerBillToAndSoldToContacts";
    GetPublicEmailTemplateResponseCcEmailTypeEnum["InvoiceOwnerAllContacts"] = "InvoiceOwnerAllContacts";
})(GetPublicEmailTemplateResponseCcEmailTypeEnum = exports.GetPublicEmailTemplateResponseCcEmailTypeEnum || (exports.GetPublicEmailTemplateResponseCcEmailTypeEnum = {}));
var GetPublicEmailTemplateResponseEncodingTypeEnum;
(function (GetPublicEmailTemplateResponseEncodingTypeEnum) {
    GetPublicEmailTemplateResponseEncodingTypeEnum["Utf8"] = "UTF8";
    GetPublicEmailTemplateResponseEncodingTypeEnum["ShiftJis"] = "Shift_JIS";
    GetPublicEmailTemplateResponseEncodingTypeEnum["Iso2022Jp"] = "ISO_2022_JP";
    GetPublicEmailTemplateResponseEncodingTypeEnum["EucJp"] = "EUC_JP";
    GetPublicEmailTemplateResponseEncodingTypeEnum["XSjis0213"] = "X_SJIS_0213";
})(GetPublicEmailTemplateResponseEncodingTypeEnum = exports.GetPublicEmailTemplateResponseEncodingTypeEnum || (exports.GetPublicEmailTemplateResponseEncodingTypeEnum = {}));
var GetPublicEmailTemplateResponseFromEmailTypeEnum;
(function (GetPublicEmailTemplateResponseFromEmailTypeEnum) {
    GetPublicEmailTemplateResponseFromEmailTypeEnum["TenantEmail"] = "TenantEmail";
    GetPublicEmailTemplateResponseFromEmailTypeEnum["SpecificEmail"] = "SpecificEmail";
})(GetPublicEmailTemplateResponseFromEmailTypeEnum = exports.GetPublicEmailTemplateResponseFromEmailTypeEnum || (exports.GetPublicEmailTemplateResponseFromEmailTypeEnum = {}));
var GetPublicEmailTemplateResponseReplyToEmailTypeEnum;
(function (GetPublicEmailTemplateResponseReplyToEmailTypeEnum) {
    GetPublicEmailTemplateResponseReplyToEmailTypeEnum["TenantEmail"] = "TenantEmail";
    GetPublicEmailTemplateResponseReplyToEmailTypeEnum["SpecificEmail"] = "SpecificEmail";
})(GetPublicEmailTemplateResponseReplyToEmailTypeEnum = exports.GetPublicEmailTemplateResponseReplyToEmailTypeEnum || (exports.GetPublicEmailTemplateResponseReplyToEmailTypeEnum = {}));
var GetPublicEmailTemplateResponseToEmailTypeEnum;
(function (GetPublicEmailTemplateResponseToEmailTypeEnum) {
    GetPublicEmailTemplateResponseToEmailTypeEnum["BillToContact"] = "BillToContact";
    GetPublicEmailTemplateResponseToEmailTypeEnum["SoldToContact"] = "SoldToContact";
    GetPublicEmailTemplateResponseToEmailTypeEnum["SpecificEmails"] = "SpecificEmails";
    GetPublicEmailTemplateResponseToEmailTypeEnum["TenantAdmin"] = "TenantAdmin";
    GetPublicEmailTemplateResponseToEmailTypeEnum["BillToAndSoldToContacts"] = "BillToAndSoldToContacts";
    GetPublicEmailTemplateResponseToEmailTypeEnum["RunOwner"] = "RunOwner";
    GetPublicEmailTemplateResponseToEmailTypeEnum["AllContacts"] = "AllContacts";
    GetPublicEmailTemplateResponseToEmailTypeEnum["InvoiceOwnerBillToContact"] = "InvoiceOwnerBillToContact";
    GetPublicEmailTemplateResponseToEmailTypeEnum["InvoiceOwnerSoldToContact"] = "InvoiceOwnerSoldToContact";
    GetPublicEmailTemplateResponseToEmailTypeEnum["InvoiceOwnerBillToAndSoldToContacts"] = "InvoiceOwnerBillToAndSoldToContacts";
    GetPublicEmailTemplateResponseToEmailTypeEnum["InvoiceOwnerAllContacts"] = "InvoiceOwnerAllContacts";
})(GetPublicEmailTemplateResponseToEmailTypeEnum = exports.GetPublicEmailTemplateResponseToEmailTypeEnum || (exports.GetPublicEmailTemplateResponseToEmailTypeEnum = {}));
var GetPublicEmailTemplateResponse = /** @class */ (function (_super) {
    __extends(GetPublicEmailTemplateResponse, _super);
    function GetPublicEmailTemplateResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=active" }),
        __metadata("design:type", Boolean)
    ], GetPublicEmailTemplateResponse.prototype, "active", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=bccEmailAddress" }),
        __metadata("design:type", String)
    ], GetPublicEmailTemplateResponse.prototype, "bccEmailAddress", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=ccEmailAddress" }),
        __metadata("design:type", String)
    ], GetPublicEmailTemplateResponse.prototype, "ccEmailAddress", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=ccEmailType" }),
        __metadata("design:type", String)
    ], GetPublicEmailTemplateResponse.prototype, "ccEmailType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=createdBy" }),
        __metadata("design:type", String)
    ], GetPublicEmailTemplateResponse.prototype, "createdBy", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=createdOn" }),
        __metadata("design:type", Date)
    ], GetPublicEmailTemplateResponse.prototype, "createdOn", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=description" }),
        __metadata("design:type", String)
    ], GetPublicEmailTemplateResponse.prototype, "description", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=emailBody" }),
        __metadata("design:type", String)
    ], GetPublicEmailTemplateResponse.prototype, "emailBody", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=emailSubject" }),
        __metadata("design:type", String)
    ], GetPublicEmailTemplateResponse.prototype, "emailSubject", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=encodingType" }),
        __metadata("design:type", String)
    ], GetPublicEmailTemplateResponse.prototype, "encodingType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=eventTypeName" }),
        __metadata("design:type", String)
    ], GetPublicEmailTemplateResponse.prototype, "eventTypeName", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=eventTypeNamespace" }),
        __metadata("design:type", String)
    ], GetPublicEmailTemplateResponse.prototype, "eventTypeNamespace", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=fromEmailAddress" }),
        __metadata("design:type", String)
    ], GetPublicEmailTemplateResponse.prototype, "fromEmailAddress", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=fromEmailType" }),
        __metadata("design:type", String)
    ], GetPublicEmailTemplateResponse.prototype, "fromEmailType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=fromName" }),
        __metadata("design:type", String)
    ], GetPublicEmailTemplateResponse.prototype, "fromName", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=id" }),
        __metadata("design:type", String)
    ], GetPublicEmailTemplateResponse.prototype, "id", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=isHtml" }),
        __metadata("design:type", Boolean)
    ], GetPublicEmailTemplateResponse.prototype, "isHtml", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], GetPublicEmailTemplateResponse.prototype, "name", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=replyToEmailAddress" }),
        __metadata("design:type", String)
    ], GetPublicEmailTemplateResponse.prototype, "replyToEmailAddress", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=replyToEmailType" }),
        __metadata("design:type", String)
    ], GetPublicEmailTemplateResponse.prototype, "replyToEmailType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=toEmailAddress" }),
        __metadata("design:type", String)
    ], GetPublicEmailTemplateResponse.prototype, "toEmailAddress", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=toEmailType" }),
        __metadata("design:type", String)
    ], GetPublicEmailTemplateResponse.prototype, "toEmailType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=updatedBy" }),
        __metadata("design:type", String)
    ], GetPublicEmailTemplateResponse.prototype, "updatedBy", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=updatedOn" }),
        __metadata("design:type", Date)
    ], GetPublicEmailTemplateResponse.prototype, "updatedOn", void 0);
    return GetPublicEmailTemplateResponse;
}(utils_1.SpeakeasyBase));
exports.GetPublicEmailTemplateResponse = GetPublicEmailTemplateResponse;
