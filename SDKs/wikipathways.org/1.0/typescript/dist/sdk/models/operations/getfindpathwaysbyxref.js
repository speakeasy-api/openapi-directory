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
exports.GetFindPathwaysByXrefResponse = exports.GetFindPathwaysByXrefRequest = exports.GetFindPathwaysByXrefQueryParams = exports.GetFindPathwaysByXrefFormatEnum = void 0;
var utils_1 = require("../../../internal/utils");
var GetFindPathwaysByXrefFormatEnum;
(function (GetFindPathwaysByXrefFormatEnum) {
    GetFindPathwaysByXrefFormatEnum["Json"] = "json";
    GetFindPathwaysByXrefFormatEnum["Xml"] = "xml";
    GetFindPathwaysByXrefFormatEnum["Html"] = "html";
    GetFindPathwaysByXrefFormatEnum["Dump"] = "dump";
    GetFindPathwaysByXrefFormatEnum["Jpg"] = "jpg";
    GetFindPathwaysByXrefFormatEnum["Pdf"] = "pdf";
})(GetFindPathwaysByXrefFormatEnum = exports.GetFindPathwaysByXrefFormatEnum || (exports.GetFindPathwaysByXrefFormatEnum = {}));
var GetFindPathwaysByXrefQueryParams = /** @class */ (function (_super) {
    __extends(GetFindPathwaysByXrefQueryParams, _super);
    function GetFindPathwaysByXrefQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=false;name=codes" }),
        __metadata("design:type", Array)
    ], GetFindPathwaysByXrefQueryParams.prototype, "codes", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=format" }),
        __metadata("design:type", String)
    ], GetFindPathwaysByXrefQueryParams.prototype, "format", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=false;name=ids" }),
        __metadata("design:type", Array)
    ], GetFindPathwaysByXrefQueryParams.prototype, "ids", void 0);
    return GetFindPathwaysByXrefQueryParams;
}(utils_1.SpeakeasyBase));
exports.GetFindPathwaysByXrefQueryParams = GetFindPathwaysByXrefQueryParams;
var GetFindPathwaysByXrefRequest = /** @class */ (function (_super) {
    __extends(GetFindPathwaysByXrefRequest, _super);
    function GetFindPathwaysByXrefRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", GetFindPathwaysByXrefQueryParams)
    ], GetFindPathwaysByXrefRequest.prototype, "queryParams", void 0);
    return GetFindPathwaysByXrefRequest;
}(utils_1.SpeakeasyBase));
exports.GetFindPathwaysByXrefRequest = GetFindPathwaysByXrefRequest;
var GetFindPathwaysByXrefResponse = /** @class */ (function (_super) {
    __extends(GetFindPathwaysByXrefResponse, _super);
    function GetFindPathwaysByXrefResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], GetFindPathwaysByXrefResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], GetFindPathwaysByXrefResponse.prototype, "statusCode", void 0);
    return GetFindPathwaysByXrefResponse;
}(utils_1.SpeakeasyBase));
exports.GetFindPathwaysByXrefResponse = GetFindPathwaysByXrefResponse;
