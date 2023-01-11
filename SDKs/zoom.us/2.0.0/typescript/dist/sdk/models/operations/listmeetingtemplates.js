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
exports.ListMeetingTemplatesResponse = exports.ListMeetingTemplatesRequest = exports.ListMeetingTemplates200ApplicationJson = exports.ListMeetingTemplates200ApplicationJsonTemplates = exports.ListMeetingTemplatesPathParams = void 0;
var utils_1 = require("../../../internal/utils");
var ListMeetingTemplatesPathParams = /** @class */ (function (_super) {
    __extends(ListMeetingTemplatesPathParams, _super);
    function ListMeetingTemplatesPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=userId" }),
        __metadata("design:type", String)
    ], ListMeetingTemplatesPathParams.prototype, "userId", void 0);
    return ListMeetingTemplatesPathParams;
}(utils_1.SpeakeasyBase));
exports.ListMeetingTemplatesPathParams = ListMeetingTemplatesPathParams;
var ListMeetingTemplates200ApplicationJsonTemplates = /** @class */ (function (_super) {
    __extends(ListMeetingTemplates200ApplicationJsonTemplates, _super);
    function ListMeetingTemplates200ApplicationJsonTemplates() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=id" }),
        __metadata("design:type", String)
    ], ListMeetingTemplates200ApplicationJsonTemplates.prototype, "id", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], ListMeetingTemplates200ApplicationJsonTemplates.prototype, "name", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=type" }),
        __metadata("design:type", Number)
    ], ListMeetingTemplates200ApplicationJsonTemplates.prototype, "type", void 0);
    return ListMeetingTemplates200ApplicationJsonTemplates;
}(utils_1.SpeakeasyBase));
exports.ListMeetingTemplates200ApplicationJsonTemplates = ListMeetingTemplates200ApplicationJsonTemplates;
var ListMeetingTemplates200ApplicationJson = /** @class */ (function (_super) {
    __extends(ListMeetingTemplates200ApplicationJson, _super);
    function ListMeetingTemplates200ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=templates", elemType: ListMeetingTemplates200ApplicationJsonTemplates }),
        __metadata("design:type", Array)
    ], ListMeetingTemplates200ApplicationJson.prototype, "templates", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=total_records" }),
        __metadata("design:type", Number)
    ], ListMeetingTemplates200ApplicationJson.prototype, "totalRecords", void 0);
    return ListMeetingTemplates200ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.ListMeetingTemplates200ApplicationJson = ListMeetingTemplates200ApplicationJson;
var ListMeetingTemplatesRequest = /** @class */ (function (_super) {
    __extends(ListMeetingTemplatesRequest, _super);
    function ListMeetingTemplatesRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", ListMeetingTemplatesPathParams)
    ], ListMeetingTemplatesRequest.prototype, "pathParams", void 0);
    return ListMeetingTemplatesRequest;
}(utils_1.SpeakeasyBase));
exports.ListMeetingTemplatesRequest = ListMeetingTemplatesRequest;
var ListMeetingTemplatesResponse = /** @class */ (function (_super) {
    __extends(ListMeetingTemplatesResponse, _super);
    function ListMeetingTemplatesResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Uint8Array)
    ], ListMeetingTemplatesResponse.prototype, "body", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], ListMeetingTemplatesResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], ListMeetingTemplatesResponse.prototype, "statusCode", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", ListMeetingTemplates200ApplicationJson)
    ], ListMeetingTemplatesResponse.prototype, "listMeetingTemplates200ApplicationJSONObject", void 0);
    return ListMeetingTemplatesResponse;
}(utils_1.SpeakeasyBase));
exports.ListMeetingTemplatesResponse = ListMeetingTemplatesResponse;
