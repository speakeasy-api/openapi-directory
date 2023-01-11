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
exports.ListWebinarTemplatesResponse = exports.ListWebinarTemplatesRequest = exports.ListWebinarTemplates200ApplicationJson = exports.ListWebinarTemplates200ApplicationJsonTemplates = exports.ListWebinarTemplatesPathParams = void 0;
var utils_1 = require("../../../internal/utils");
var ListWebinarTemplatesPathParams = /** @class */ (function (_super) {
    __extends(ListWebinarTemplatesPathParams, _super);
    function ListWebinarTemplatesPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=userId" }),
        __metadata("design:type", String)
    ], ListWebinarTemplatesPathParams.prototype, "userId", void 0);
    return ListWebinarTemplatesPathParams;
}(utils_1.SpeakeasyBase));
exports.ListWebinarTemplatesPathParams = ListWebinarTemplatesPathParams;
var ListWebinarTemplates200ApplicationJsonTemplates = /** @class */ (function (_super) {
    __extends(ListWebinarTemplates200ApplicationJsonTemplates, _super);
    function ListWebinarTemplates200ApplicationJsonTemplates() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=id" }),
        __metadata("design:type", String)
    ], ListWebinarTemplates200ApplicationJsonTemplates.prototype, "id", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], ListWebinarTemplates200ApplicationJsonTemplates.prototype, "name", void 0);
    return ListWebinarTemplates200ApplicationJsonTemplates;
}(utils_1.SpeakeasyBase));
exports.ListWebinarTemplates200ApplicationJsonTemplates = ListWebinarTemplates200ApplicationJsonTemplates;
var ListWebinarTemplates200ApplicationJson = /** @class */ (function (_super) {
    __extends(ListWebinarTemplates200ApplicationJson, _super);
    function ListWebinarTemplates200ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=templates", elemType: ListWebinarTemplates200ApplicationJsonTemplates }),
        __metadata("design:type", Array)
    ], ListWebinarTemplates200ApplicationJson.prototype, "templates", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=total_records" }),
        __metadata("design:type", Number)
    ], ListWebinarTemplates200ApplicationJson.prototype, "totalRecords", void 0);
    return ListWebinarTemplates200ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.ListWebinarTemplates200ApplicationJson = ListWebinarTemplates200ApplicationJson;
var ListWebinarTemplatesRequest = /** @class */ (function (_super) {
    __extends(ListWebinarTemplatesRequest, _super);
    function ListWebinarTemplatesRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", ListWebinarTemplatesPathParams)
    ], ListWebinarTemplatesRequest.prototype, "pathParams", void 0);
    return ListWebinarTemplatesRequest;
}(utils_1.SpeakeasyBase));
exports.ListWebinarTemplatesRequest = ListWebinarTemplatesRequest;
var ListWebinarTemplatesResponse = /** @class */ (function (_super) {
    __extends(ListWebinarTemplatesResponse, _super);
    function ListWebinarTemplatesResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Uint8Array)
    ], ListWebinarTemplatesResponse.prototype, "body", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], ListWebinarTemplatesResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], ListWebinarTemplatesResponse.prototype, "statusCode", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", ListWebinarTemplates200ApplicationJson)
    ], ListWebinarTemplatesResponse.prototype, "listWebinarTemplates200ApplicationJSONObject", void 0);
    return ListWebinarTemplatesResponse;
}(utils_1.SpeakeasyBase));
exports.ListWebinarTemplatesResponse = ListWebinarTemplatesResponse;
