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
exports.PostPublicEmailTemplateRequest = exports.PostPublicEmailTemplateRequestToEmailTypeEnum = exports.PostPublicEmailTemplateRequestReplyToEmailTypeEnum = exports.PostPublicEmailTemplateRequestFromEmailTypeEnum = exports.PostPublicEmailTemplateRequestEncodingTypeEnum = exports.PostPublicEmailTemplateRequestCcEmailTypeEnum = void 0;
var utils_1 = require("../../../internal/utils");
var PostPublicEmailTemplateRequestCcEmailTypeEnum;
(function (PostPublicEmailTemplateRequestCcEmailTypeEnum) {
    PostPublicEmailTemplateRequestCcEmailTypeEnum["BillToContact"] = "BillToContact";
    PostPublicEmailTemplateRequestCcEmailTypeEnum["SoldToContact"] = "SoldToContact";
    PostPublicEmailTemplateRequestCcEmailTypeEnum["SpecificEmails"] = "SpecificEmails";
    PostPublicEmailTemplateRequestCcEmailTypeEnum["TenantAdmin"] = "TenantAdmin";
    PostPublicEmailTemplateRequestCcEmailTypeEnum["BillToAndSoldToContacts"] = "BillToAndSoldToContacts";
    PostPublicEmailTemplateRequestCcEmailTypeEnum["RunOwner"] = "RunOwner";
    PostPublicEmailTemplateRequestCcEmailTypeEnum["AllContacts"] = "AllContacts";
    PostPublicEmailTemplateRequestCcEmailTypeEnum["InvoiceOwnerBillToContact"] = "InvoiceOwnerBillToContact";
    PostPublicEmailTemplateRequestCcEmailTypeEnum["InvoiceOwnerSoldToContact"] = "InvoiceOwnerSoldToContact";
    PostPublicEmailTemplateRequestCcEmailTypeEnum["InvoiceOwnerBillToAndSoldToContacts"] = "InvoiceOwnerBillToAndSoldToContacts";
    PostPublicEmailTemplateRequestCcEmailTypeEnum["InvoiceOwnerAllContacts"] = "InvoiceOwnerAllContacts";
})(PostPublicEmailTemplateRequestCcEmailTypeEnum = exports.PostPublicEmailTemplateRequestCcEmailTypeEnum || (exports.PostPublicEmailTemplateRequestCcEmailTypeEnum = {}));
var PostPublicEmailTemplateRequestEncodingTypeEnum;
(function (PostPublicEmailTemplateRequestEncodingTypeEnum) {
    PostPublicEmailTemplateRequestEncodingTypeEnum["Utf8"] = "UTF8";
    PostPublicEmailTemplateRequestEncodingTypeEnum["ShiftJis"] = "Shift_JIS";
    PostPublicEmailTemplateRequestEncodingTypeEnum["Iso2022Jp"] = "ISO_2022_JP";
    PostPublicEmailTemplateRequestEncodingTypeEnum["EucJp"] = "EUC_JP";
    PostPublicEmailTemplateRequestEncodingTypeEnum["XSjis0213"] = "X_SJIS_0213";
})(PostPublicEmailTemplateRequestEncodingTypeEnum = exports.PostPublicEmailTemplateRequestEncodingTypeEnum || (exports.PostPublicEmailTemplateRequestEncodingTypeEnum = {}));
var PostPublicEmailTemplateRequestFromEmailTypeEnum;
(function (PostPublicEmailTemplateRequestFromEmailTypeEnum) {
    PostPublicEmailTemplateRequestFromEmailTypeEnum["TenantEmail"] = "TenantEmail";
    PostPublicEmailTemplateRequestFromEmailTypeEnum["SpecificEmail"] = "SpecificEmail";
})(PostPublicEmailTemplateRequestFromEmailTypeEnum = exports.PostPublicEmailTemplateRequestFromEmailTypeEnum || (exports.PostPublicEmailTemplateRequestFromEmailTypeEnum = {}));
var PostPublicEmailTemplateRequestReplyToEmailTypeEnum;
(function (PostPublicEmailTemplateRequestReplyToEmailTypeEnum) {
    PostPublicEmailTemplateRequestReplyToEmailTypeEnum["TenantEmail"] = "TenantEmail";
    PostPublicEmailTemplateRequestReplyToEmailTypeEnum["SpecificEmail"] = "SpecificEmail";
})(PostPublicEmailTemplateRequestReplyToEmailTypeEnum = exports.PostPublicEmailTemplateRequestReplyToEmailTypeEnum || (exports.PostPublicEmailTemplateRequestReplyToEmailTypeEnum = {}));
var PostPublicEmailTemplateRequestToEmailTypeEnum;
(function (PostPublicEmailTemplateRequestToEmailTypeEnum) {
    PostPublicEmailTemplateRequestToEmailTypeEnum["BillToContact"] = "BillToContact";
    PostPublicEmailTemplateRequestToEmailTypeEnum["SoldToContact"] = "SoldToContact";
    PostPublicEmailTemplateRequestToEmailTypeEnum["SpecificEmails"] = "SpecificEmails";
    PostPublicEmailTemplateRequestToEmailTypeEnum["TenantAdmin"] = "TenantAdmin";
    PostPublicEmailTemplateRequestToEmailTypeEnum["BillToAndSoldToContacts"] = "BillToAndSoldToContacts";
    PostPublicEmailTemplateRequestToEmailTypeEnum["RunOwner"] = "RunOwner";
    PostPublicEmailTemplateRequestToEmailTypeEnum["AllContacts"] = "AllContacts";
    PostPublicEmailTemplateRequestToEmailTypeEnum["InvoiceOwnerBillToContact"] = "InvoiceOwnerBillToContact";
    PostPublicEmailTemplateRequestToEmailTypeEnum["InvoiceOwnerSoldToContact"] = "InvoiceOwnerSoldToContact";
    PostPublicEmailTemplateRequestToEmailTypeEnum["InvoiceOwnerBillToAndSoldToContacts"] = "InvoiceOwnerBillToAndSoldToContacts";
    PostPublicEmailTemplateRequestToEmailTypeEnum["InvoiceOwnerAllContacts"] = "InvoiceOwnerAllContacts";
})(PostPublicEmailTemplateRequestToEmailTypeEnum = exports.PostPublicEmailTemplateRequestToEmailTypeEnum || (exports.PostPublicEmailTemplateRequestToEmailTypeEnum = {}));
var PostPublicEmailTemplateRequest = /** @class */ (function (_super) {
    __extends(PostPublicEmailTemplateRequest, _super);
    function PostPublicEmailTemplateRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=active" }),
        __metadata("design:type", Boolean)
    ], PostPublicEmailTemplateRequest.prototype, "active", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=bccEmailAddress" }),
        __metadata("design:type", String)
    ], PostPublicEmailTemplateRequest.prototype, "bccEmailAddress", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=ccEmailAddress" }),
        __metadata("design:type", String)
    ], PostPublicEmailTemplateRequest.prototype, "ccEmailAddress", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=ccEmailType" }),
        __metadata("design:type", String)
    ], PostPublicEmailTemplateRequest.prototype, "ccEmailType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=description" }),
        __metadata("design:type", String)
    ], PostPublicEmailTemplateRequest.prototype, "description", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=emailBody" }),
        __metadata("design:type", String)
    ], PostPublicEmailTemplateRequest.prototype, "emailBody", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=emailSubject" }),
        __metadata("design:type", String)
    ], PostPublicEmailTemplateRequest.prototype, "emailSubject", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=encodingType" }),
        __metadata("design:type", String)
    ], PostPublicEmailTemplateRequest.prototype, "encodingType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=eventTypeName" }),
        __metadata("design:type", String)
    ], PostPublicEmailTemplateRequest.prototype, "eventTypeName", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=eventTypeNamespace" }),
        __metadata("design:type", String)
    ], PostPublicEmailTemplateRequest.prototype, "eventTypeNamespace", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=fromEmailAddress" }),
        __metadata("design:type", String)
    ], PostPublicEmailTemplateRequest.prototype, "fromEmailAddress", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=fromEmailType" }),
        __metadata("design:type", String)
    ], PostPublicEmailTemplateRequest.prototype, "fromEmailType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=fromName" }),
        __metadata("design:type", String)
    ], PostPublicEmailTemplateRequest.prototype, "fromName", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=isHtml" }),
        __metadata("design:type", Boolean)
    ], PostPublicEmailTemplateRequest.prototype, "isHtml", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], PostPublicEmailTemplateRequest.prototype, "name", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=replyToEmailAddress" }),
        __metadata("design:type", String)
    ], PostPublicEmailTemplateRequest.prototype, "replyToEmailAddress", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=replyToEmailType" }),
        __metadata("design:type", String)
    ], PostPublicEmailTemplateRequest.prototype, "replyToEmailType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=toEmailAddress" }),
        __metadata("design:type", String)
    ], PostPublicEmailTemplateRequest.prototype, "toEmailAddress", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=toEmailType" }),
        __metadata("design:type", String)
    ], PostPublicEmailTemplateRequest.prototype, "toEmailType", void 0);
    return PostPublicEmailTemplateRequest;
}(utils_1.SpeakeasyBase));
exports.PostPublicEmailTemplateRequest = PostPublicEmailTemplateRequest;
