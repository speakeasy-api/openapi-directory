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
exports.DeleteMembersOfSlgResponse = exports.DeleteMembersOfSlgRequest = exports.DeleteMembersOfSlgPathParams = void 0;
var utils_1 = require("../../../internal/utils");
var DeleteMembersOfSlgPathParams = /** @class */ (function (_super) {
    __extends(DeleteMembersOfSlgPathParams, _super);
    function DeleteMembersOfSlgPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=sharedLineGroupId" }),
        __metadata("design:type", String)
    ], DeleteMembersOfSlgPathParams.prototype, "sharedLineGroupId", void 0);
    return DeleteMembersOfSlgPathParams;
}(utils_1.SpeakeasyBase));
exports.DeleteMembersOfSlgPathParams = DeleteMembersOfSlgPathParams;
var DeleteMembersOfSlgRequest = /** @class */ (function (_super) {
    __extends(DeleteMembersOfSlgRequest, _super);
    function DeleteMembersOfSlgRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", DeleteMembersOfSlgPathParams)
    ], DeleteMembersOfSlgRequest.prototype, "pathParams", void 0);
    return DeleteMembersOfSlgRequest;
}(utils_1.SpeakeasyBase));
exports.DeleteMembersOfSlgRequest = DeleteMembersOfSlgRequest;
var DeleteMembersOfSlgResponse = /** @class */ (function (_super) {
    __extends(DeleteMembersOfSlgResponse, _super);
    function DeleteMembersOfSlgResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Uint8Array)
    ], DeleteMembersOfSlgResponse.prototype, "body", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], DeleteMembersOfSlgResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], DeleteMembersOfSlgResponse.prototype, "statusCode", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], DeleteMembersOfSlgResponse.prototype, "deleteMembersOfSLG204ApplicationJSONAny", void 0);
    return DeleteMembersOfSlgResponse;
}(utils_1.SpeakeasyBase));
exports.DeleteMembersOfSlgResponse = DeleteMembersOfSlgResponse;
