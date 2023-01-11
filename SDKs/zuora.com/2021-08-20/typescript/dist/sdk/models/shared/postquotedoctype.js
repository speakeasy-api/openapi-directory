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
exports.PostQuoteDocType = void 0;
var utils_1 = require("../../../internal/utils");
var PostQuoteDocType = /** @class */ (function (_super) {
    __extends(PostQuoteDocType, _super);
    function PostQuoteDocType() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=apiuser" }),
        __metadata("design:type", String)
    ], PostQuoteDocType.prototype, "apiuser", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=documentType" }),
        __metadata("design:type", String)
    ], PostQuoteDocType.prototype, "documentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=locale" }),
        __metadata("design:type", String)
    ], PostQuoteDocType.prototype, "locale", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=password" }),
        __metadata("design:type", String)
    ], PostQuoteDocType.prototype, "password", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=quoteId" }),
        __metadata("design:type", String)
    ], PostQuoteDocType.prototype, "quoteId", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=sandbox" }),
        __metadata("design:type", String)
    ], PostQuoteDocType.prototype, "sandbox", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=serverUrl" }),
        __metadata("design:type", String)
    ], PostQuoteDocType.prototype, "serverUrl", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=sessionId" }),
        __metadata("design:type", String)
    ], PostQuoteDocType.prototype, "sessionId", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=templateId" }),
        __metadata("design:type", String)
    ], PostQuoteDocType.prototype, "templateId", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=token" }),
        __metadata("design:type", String)
    ], PostQuoteDocType.prototype, "token", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=useSFDCLocale" }),
        __metadata("design:type", String)
    ], PostQuoteDocType.prototype, "useSFDCLocale", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=username" }),
        __metadata("design:type", String)
    ], PostQuoteDocType.prototype, "username", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=zquotesMajorVersion" }),
        __metadata("design:type", String)
    ], PostQuoteDocType.prototype, "zquotesMajorVersion", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=zquotesMinorVersion" }),
        __metadata("design:type", String)
    ], PostQuoteDocType.prototype, "zquotesMinorVersion", void 0);
    return PostQuoteDocType;
}(utils_1.SpeakeasyBase));
exports.PostQuoteDocType = PostQuoteDocType;
