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
exports.GetGetColoredPathwayResponse = exports.GetGetColoredPathwayRequest = exports.GetGetColoredPathwayQueryParams = exports.GetGetColoredPathwayFormatEnum = void 0;
var utils_1 = require("../../../internal/utils");
var GetGetColoredPathwayFormatEnum;
(function (GetGetColoredPathwayFormatEnum) {
    GetGetColoredPathwayFormatEnum["Json"] = "json";
    GetGetColoredPathwayFormatEnum["Xml"] = "xml";
    GetGetColoredPathwayFormatEnum["Html"] = "html";
    GetGetColoredPathwayFormatEnum["Dump"] = "dump";
    GetGetColoredPathwayFormatEnum["Jpg"] = "jpg";
    GetGetColoredPathwayFormatEnum["Pdf"] = "pdf";
})(GetGetColoredPathwayFormatEnum = exports.GetGetColoredPathwayFormatEnum || (exports.GetGetColoredPathwayFormatEnum = {}));
var GetGetColoredPathwayQueryParams = /** @class */ (function (_super) {
    __extends(GetGetColoredPathwayQueryParams, _super);
    function GetGetColoredPathwayQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=false;name=color" }),
        __metadata("design:type", Array)
    ], GetGetColoredPathwayQueryParams.prototype, "color", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=fileType" }),
        __metadata("design:type", String)
    ], GetGetColoredPathwayQueryParams.prototype, "fileType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=format" }),
        __metadata("design:type", String)
    ], GetGetColoredPathwayQueryParams.prototype, "format", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=false;name=graphId" }),
        __metadata("design:type", Array)
    ], GetGetColoredPathwayQueryParams.prototype, "graphId", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=pwId" }),
        __metadata("design:type", String)
    ], GetGetColoredPathwayQueryParams.prototype, "pwId", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=revision" }),
        __metadata("design:type", String)
    ], GetGetColoredPathwayQueryParams.prototype, "revision", void 0);
    return GetGetColoredPathwayQueryParams;
}(utils_1.SpeakeasyBase));
exports.GetGetColoredPathwayQueryParams = GetGetColoredPathwayQueryParams;
var GetGetColoredPathwayRequest = /** @class */ (function (_super) {
    __extends(GetGetColoredPathwayRequest, _super);
    function GetGetColoredPathwayRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", GetGetColoredPathwayQueryParams)
    ], GetGetColoredPathwayRequest.prototype, "queryParams", void 0);
    return GetGetColoredPathwayRequest;
}(utils_1.SpeakeasyBase));
exports.GetGetColoredPathwayRequest = GetGetColoredPathwayRequest;
var GetGetColoredPathwayResponse = /** @class */ (function (_super) {
    __extends(GetGetColoredPathwayResponse, _super);
    function GetGetColoredPathwayResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], GetGetColoredPathwayResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], GetGetColoredPathwayResponse.prototype, "statusCode", void 0);
    return GetGetColoredPathwayResponse;
}(utils_1.SpeakeasyBase));
exports.GetGetColoredPathwayResponse = GetGetColoredPathwayResponse;
