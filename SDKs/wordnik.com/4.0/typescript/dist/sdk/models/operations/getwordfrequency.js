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
exports.GetWordFrequencyResponse = exports.GetWordFrequencyRequest = exports.GetWordFrequencyQueryParams = exports.GetWordFrequencyUseCanonicalEnum = exports.GetWordFrequencyPathParams = void 0;
var utils_1 = require("../../../internal/utils");
var GetWordFrequencyPathParams = /** @class */ (function (_super) {
    __extends(GetWordFrequencyPathParams, _super);
    function GetWordFrequencyPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=word" }),
        __metadata("design:type", String)
    ], GetWordFrequencyPathParams.prototype, "word", void 0);
    return GetWordFrequencyPathParams;
}(utils_1.SpeakeasyBase));
exports.GetWordFrequencyPathParams = GetWordFrequencyPathParams;
var GetWordFrequencyUseCanonicalEnum;
(function (GetWordFrequencyUseCanonicalEnum) {
    GetWordFrequencyUseCanonicalEnum["False"] = "false";
    GetWordFrequencyUseCanonicalEnum["True"] = "true";
})(GetWordFrequencyUseCanonicalEnum = exports.GetWordFrequencyUseCanonicalEnum || (exports.GetWordFrequencyUseCanonicalEnum = {}));
var GetWordFrequencyQueryParams = /** @class */ (function (_super) {
    __extends(GetWordFrequencyQueryParams, _super);
    function GetWordFrequencyQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=endYear" }),
        __metadata("design:type", Number)
    ], GetWordFrequencyQueryParams.prototype, "endYear", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=startYear" }),
        __metadata("design:type", Number)
    ], GetWordFrequencyQueryParams.prototype, "startYear", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=useCanonical" }),
        __metadata("design:type", String)
    ], GetWordFrequencyQueryParams.prototype, "useCanonical", void 0);
    return GetWordFrequencyQueryParams;
}(utils_1.SpeakeasyBase));
exports.GetWordFrequencyQueryParams = GetWordFrequencyQueryParams;
var GetWordFrequencyRequest = /** @class */ (function (_super) {
    __extends(GetWordFrequencyRequest, _super);
    function GetWordFrequencyRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", GetWordFrequencyPathParams)
    ], GetWordFrequencyRequest.prototype, "pathParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", GetWordFrequencyQueryParams)
    ], GetWordFrequencyRequest.prototype, "queryParams", void 0);
    return GetWordFrequencyRequest;
}(utils_1.SpeakeasyBase));
exports.GetWordFrequencyRequest = GetWordFrequencyRequest;
var GetWordFrequencyResponse = /** @class */ (function (_super) {
    __extends(GetWordFrequencyResponse, _super);
    function GetWordFrequencyResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Uint8Array)
    ], GetWordFrequencyResponse.prototype, "body", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], GetWordFrequencyResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], GetWordFrequencyResponse.prototype, "statusCode", void 0);
    return GetWordFrequencyResponse;
}(utils_1.SpeakeasyBase));
exports.GetWordFrequencyResponse = GetWordFrequencyResponse;
