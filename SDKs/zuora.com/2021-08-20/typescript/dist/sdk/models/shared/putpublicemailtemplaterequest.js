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
exports.PutPublicEmailTemplateRequest = exports.PutPublicEmailTemplateRequestToEmailTypeEnum = exports.PutPublicEmailTemplateRequestReplyToEmailTypeEnum = exports.PutPublicEmailTemplateRequestFromEmailTypeEnum = exports.PutPublicEmailTemplateRequestEncodingTypeEnum = exports.PutPublicEmailTemplateRequestCcEmailTypeEnum = void 0;
var utils_1 = require("../../../internal/utils");
var PutPublicEmailTemplateRequestCcEmailTypeEnum;
(function (PutPublicEmailTemplateRequestCcEmailTypeEnum) {
    PutPublicEmailTemplateRequestCcEmailTypeEnum["BillToContact"] = "BillToContact";
    PutPublicEmailTemplateRequestCcEmailTypeEnum["SoldToContact"] = "SoldToContact";
    PutPublicEmailTemplateRequestCcEmailTypeEnum["SpecificEmails"] = "SpecificEmails";
    PutPublicEmailTemplateRequestCcEmailTypeEnum["TenantAdmin"] = "TenantAdmin";
    PutPublicEmailTemplateRequestCcEmailTypeEnum["BillToAndSoldToContacts"] = "BillToAndSoldToContacts";
    PutPublicEmailTemplateRequestCcEmailTypeEnum["RunOwner"] = "RunOwner";
    PutPublicEmailTemplateRequestCcEmailTypeEnum["AllContacts"] = "AllContacts";
    PutPublicEmailTemplateRequestCcEmailTypeEnum["InvoiceOwnerBillToContact"] = "InvoiceOwnerBillToContact";
    PutPublicEmailTemplateRequestCcEmailTypeEnum["InvoiceOwnerSoldToContact"] = "InvoiceOwnerSoldToContact";
    PutPublicEmailTemplateRequestCcEmailTypeEnum["InvoiceOwnerBillToAndSoldToContacts"] = "InvoiceOwnerBillToAndSoldToContacts";
    PutPublicEmailTemplateRequestCcEmailTypeEnum["InvoiceOwnerAllContacts"] = "InvoiceOwnerAllContacts";
})(PutPublicEmailTemplateRequestCcEmailTypeEnum = exports.PutPublicEmailTemplateRequestCcEmailTypeEnum || (exports.PutPublicEmailTemplateRequestCcEmailTypeEnum = {}));
var PutPublicEmailTemplateRequestEncodingTypeEnum;
(function (PutPublicEmailTemplateRequestEncodingTypeEnum) {
    PutPublicEmailTemplateRequestEncodingTypeEnum["Utf8"] = "UTF8";
    PutPublicEmailTemplateRequestEncodingTypeEnum["ShiftJis"] = "Shift_JIS";
    PutPublicEmailTemplateRequestEncodingTypeEnum["Iso2022Jp"] = "ISO_2022_JP";
    PutPublicEmailTemplateRequestEncodingTypeEnum["EucJp"] = "EUC_JP";
    PutPublicEmailTemplateRequestEncodingTypeEnum["XSjis0213"] = "X_SJIS_0213";
})(PutPublicEmailTemplateRequestEncodingTypeEnum = exports.PutPublicEmailTemplateRequestEncodingTypeEnum || (exports.PutPublicEmailTemplateRequestEncodingTypeEnum = {}));
var PutPublicEmailTemplateRequestFromEmailTypeEnum;
(function (PutPublicEmailTemplateRequestFromEmailTypeEnum) {
    PutPublicEmailTemplateRequestFromEmailTypeEnum["TenantEmail"] = "TenantEmail";
    PutPublicEmailTemplateRequestFromEmailTypeEnum["SpecificEmail"] = "SpecificEmail";
})(PutPublicEmailTemplateRequestFromEmailTypeEnum = exports.PutPublicEmailTemplateRequestFromEmailTypeEnum || (exports.PutPublicEmailTemplateRequestFromEmailTypeEnum = {}));
var PutPublicEmailTemplateRequestReplyToEmailTypeEnum;
(function (PutPublicEmailTemplateRequestReplyToEmailTypeEnum) {
    PutPublicEmailTemplateRequestReplyToEmailTypeEnum["TenantEmail"] = "TenantEmail";
    PutPublicEmailTemplateRequestReplyToEmailTypeEnum["SpecificEmail"] = "SpecificEmail";
})(PutPublicEmailTemplateRequestReplyToEmailTypeEnum = exports.PutPublicEmailTemplateRequestReplyToEmailTypeEnum || (exports.PutPublicEmailTemplateRequestReplyToEmailTypeEnum = {}));
var PutPublicEmailTemplateRequestToEmailTypeEnum;
(function (PutPublicEmailTemplateRequestToEmailTypeEnum) {
    PutPublicEmailTemplateRequestToEmailTypeEnum["BillToContact"] = "BillToContact";
    PutPublicEmailTemplateRequestToEmailTypeEnum["SoldToContact"] = "SoldToContact";
    PutPublicEmailTemplateRequestToEmailTypeEnum["SpecificEmails"] = "SpecificEmails";
    PutPublicEmailTemplateRequestToEmailTypeEnum["TenantAdmin"] = "TenantAdmin";
    PutPublicEmailTemplateRequestToEmailTypeEnum["BillToAndSoldToContacts"] = "BillToAndSoldToContacts";
    PutPublicEmailTemplateRequestToEmailTypeEnum["RunOwner"] = "RunOwner";
    PutPublicEmailTemplateRequestToEmailTypeEnum["AllContacts"] = "AllContacts";
    PutPublicEmailTemplateRequestToEmailTypeEnum["InvoiceOwnerBillToContact"] = "InvoiceOwnerBillToContact";
    PutPublicEmailTemplateRequestToEmailTypeEnum["InvoiceOwnerSoldToContact"] = "InvoiceOwnerSoldToContact";
    PutPublicEmailTemplateRequestToEmailTypeEnum["InvoiceOwnerBillToAndSoldToContacts"] = "InvoiceOwnerBillToAndSoldToContacts";
    PutPublicEmailTemplateRequestToEmailTypeEnum["InvoiceOwnerAllContacts"] = "InvoiceOwnerAllContacts";
})(PutPublicEmailTemplateRequestToEmailTypeEnum = exports.PutPublicEmailTemplateRequestToEmailTypeEnum || (exports.PutPublicEmailTemplateRequestToEmailTypeEnum = {}));
var PutPublicEmailTemplateRequest = /** @class */ (function (_super) {
    __extends(PutPublicEmailTemplateRequest, _super);
    function PutPublicEmailTemplateRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=active" }),
        __metadata("design:type", Boolean)
    ], PutPublicEmailTemplateRequest.prototype, "active", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=bccEmailAddress" }),
        __metadata("design:type", String)
    ], PutPublicEmailTemplateRequest.prototype, "bccEmailAddress", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=ccEmailAddress" }),
        __metadata("design:type", String)
    ], PutPublicEmailTemplateRequest.prototype, "ccEmailAddress", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=ccEmailType" }),
        __metadata("design:type", String)
    ], PutPublicEmailTemplateRequest.prototype, "ccEmailType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=description" }),
        __metadata("design:type", String)
    ], PutPublicEmailTemplateRequest.prototype, "description", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=emailBody" }),
        __metadata("design:type", String)
    ], PutPublicEmailTemplateRequest.prototype, "emailBody", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=emailSubject" }),
        __metadata("design:type", String)
    ], PutPublicEmailTemplateRequest.prototype, "emailSubject", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=encodingType" }),
        __metadata("design:type", String)
    ], PutPublicEmailTemplateRequest.prototype, "encodingType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=fromEmailAddress" }),
        __metadata("design:type", String)
    ], PutPublicEmailTemplateRequest.prototype, "fromEmailAddress", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=fromEmailType" }),
        __metadata("design:type", String)
    ], PutPublicEmailTemplateRequest.prototype, "fromEmailType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=fromName" }),
        __metadata("design:type", String)
    ], PutPublicEmailTemplateRequest.prototype, "fromName", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=isHtml" }),
        __metadata("design:type", Boolean)
    ], PutPublicEmailTemplateRequest.prototype, "isHtml", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], PutPublicEmailTemplateRequest.prototype, "name", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=replyToEmailAddress" }),
        __metadata("design:type", String)
    ], PutPublicEmailTemplateRequest.prototype, "replyToEmailAddress", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=replyToEmailType" }),
        __metadata("design:type", String)
    ], PutPublicEmailTemplateRequest.prototype, "replyToEmailType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=toEmailAddress" }),
        __metadata("design:type", String)
    ], PutPublicEmailTemplateRequest.prototype, "toEmailAddress", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=toEmailType" }),
        __metadata("design:type", String)
    ], PutPublicEmailTemplateRequest.prototype, "toEmailType", void 0);
    return PutPublicEmailTemplateRequest;
}(utils_1.SpeakeasyBase));
exports.PutPublicEmailTemplateRequest = PutPublicEmailTemplateRequest;
