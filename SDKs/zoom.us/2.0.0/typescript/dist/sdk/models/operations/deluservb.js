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
exports.DelUserVbResponse = exports.DelUserVbRequest = exports.DelUserVbQueryParams = exports.DelUserVbPathParams = void 0;
var utils_1 = require("../../../internal/utils");
var DelUserVbPathParams = /** @class */ (function (_super) {
    __extends(DelUserVbPathParams, _super);
    function DelUserVbPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=userId" }),
        __metadata("design:type", String)
    ], DelUserVbPathParams.prototype, "userId", void 0);
    return DelUserVbPathParams;
}(utils_1.SpeakeasyBase));
exports.DelUserVbPathParams = DelUserVbPathParams;
var DelUserVbQueryParams = /** @class */ (function (_super) {
    __extends(DelUserVbQueryParams, _super);
    function DelUserVbQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=file_ids" }),
        __metadata("design:type", String)
    ], DelUserVbQueryParams.prototype, "fileIds", void 0);
    return DelUserVbQueryParams;
}(utils_1.SpeakeasyBase));
exports.DelUserVbQueryParams = DelUserVbQueryParams;
var DelUserVbRequest = /** @class */ (function (_super) {
    __extends(DelUserVbRequest, _super);
    function DelUserVbRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", DelUserVbPathParams)
    ], DelUserVbRequest.prototype, "pathParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", DelUserVbQueryParams)
    ], DelUserVbRequest.prototype, "queryParams", void 0);
    return DelUserVbRequest;
}(utils_1.SpeakeasyBase));
exports.DelUserVbRequest = DelUserVbRequest;
var DelUserVbResponse = /** @class */ (function (_super) {
    __extends(DelUserVbResponse, _super);
    function DelUserVbResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], DelUserVbResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], DelUserVbResponse.prototype, "statusCode", void 0);
    return DelUserVbResponse;
}(utils_1.SpeakeasyBase));
exports.DelUserVbResponse = DelUserVbResponse;
