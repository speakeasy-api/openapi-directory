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
exports.GetGetXrefListResponse = exports.GetGetXrefListRequest = exports.GetGetXrefListQueryParams = exports.GetGetXrefListFormatEnum = void 0;
var utils_1 = require("../../../internal/utils");
var GetGetXrefListFormatEnum;
(function (GetGetXrefListFormatEnum) {
    GetGetXrefListFormatEnum["Json"] = "json";
    GetGetXrefListFormatEnum["Xml"] = "xml";
    GetGetXrefListFormatEnum["Html"] = "html";
    GetGetXrefListFormatEnum["Dump"] = "dump";
    GetGetXrefListFormatEnum["Jpg"] = "jpg";
    GetGetXrefListFormatEnum["Pdf"] = "pdf";
})(GetGetXrefListFormatEnum = exports.GetGetXrefListFormatEnum || (exports.GetGetXrefListFormatEnum = {}));
var GetGetXrefListQueryParams = /** @class */ (function (_super) {
    __extends(GetGetXrefListQueryParams, _super);
    function GetGetXrefListQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=code" }),
        __metadata("design:type", String)
    ], GetGetXrefListQueryParams.prototype, "code", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=format" }),
        __metadata("design:type", String)
    ], GetGetXrefListQueryParams.prototype, "format", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=pwId" }),
        __metadata("design:type", String)
    ], GetGetXrefListQueryParams.prototype, "pwId", void 0);
    return GetGetXrefListQueryParams;
}(utils_1.SpeakeasyBase));
exports.GetGetXrefListQueryParams = GetGetXrefListQueryParams;
var GetGetXrefListRequest = /** @class */ (function (_super) {
    __extends(GetGetXrefListRequest, _super);
    function GetGetXrefListRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", GetGetXrefListQueryParams)
    ], GetGetXrefListRequest.prototype, "queryParams", void 0);
    return GetGetXrefListRequest;
}(utils_1.SpeakeasyBase));
exports.GetGetXrefListRequest = GetGetXrefListRequest;
var GetGetXrefListResponse = /** @class */ (function (_super) {
    __extends(GetGetXrefListResponse, _super);
    function GetGetXrefListResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], GetGetXrefListResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], GetGetXrefListResponse.prototype, "statusCode", void 0);
    return GetGetXrefListResponse;
}(utils_1.SpeakeasyBase));
exports.GetGetXrefListResponse = GetGetXrefListResponse;
