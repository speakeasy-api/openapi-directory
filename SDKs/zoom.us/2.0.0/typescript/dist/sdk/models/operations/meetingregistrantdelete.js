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
exports.MeetingregistrantdeleteResponse = exports.MeetingregistrantdeleteRequest = exports.MeetingregistrantdeleteQueryParams = exports.MeetingregistrantdeletePathParams = void 0;
var utils_1 = require("../../../internal/utils");
var MeetingregistrantdeletePathParams = /** @class */ (function (_super) {
    __extends(MeetingregistrantdeletePathParams, _super);
    function MeetingregistrantdeletePathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=meetingId" }),
        __metadata("design:type", Number)
    ], MeetingregistrantdeletePathParams.prototype, "meetingId", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=registrantId" }),
        __metadata("design:type", String)
    ], MeetingregistrantdeletePathParams.prototype, "registrantId", void 0);
    return MeetingregistrantdeletePathParams;
}(utils_1.SpeakeasyBase));
exports.MeetingregistrantdeletePathParams = MeetingregistrantdeletePathParams;
var MeetingregistrantdeleteQueryParams = /** @class */ (function (_super) {
    __extends(MeetingregistrantdeleteQueryParams, _super);
    function MeetingregistrantdeleteQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=occurrence_id" }),
        __metadata("design:type", String)
    ], MeetingregistrantdeleteQueryParams.prototype, "occurrenceId", void 0);
    return MeetingregistrantdeleteQueryParams;
}(utils_1.SpeakeasyBase));
exports.MeetingregistrantdeleteQueryParams = MeetingregistrantdeleteQueryParams;
var MeetingregistrantdeleteRequest = /** @class */ (function (_super) {
    __extends(MeetingregistrantdeleteRequest, _super);
    function MeetingregistrantdeleteRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", MeetingregistrantdeletePathParams)
    ], MeetingregistrantdeleteRequest.prototype, "pathParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", MeetingregistrantdeleteQueryParams)
    ], MeetingregistrantdeleteRequest.prototype, "queryParams", void 0);
    return MeetingregistrantdeleteRequest;
}(utils_1.SpeakeasyBase));
exports.MeetingregistrantdeleteRequest = MeetingregistrantdeleteRequest;
var MeetingregistrantdeleteResponse = /** @class */ (function (_super) {
    __extends(MeetingregistrantdeleteResponse, _super);
    function MeetingregistrantdeleteResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], MeetingregistrantdeleteResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], MeetingregistrantdeleteResponse.prototype, "statusCode", void 0);
    return MeetingregistrantdeleteResponse;
}(utils_1.SpeakeasyBase));
exports.MeetingregistrantdeleteResponse = MeetingregistrantdeleteResponse;
