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
exports.CustomObjectBulkJobResponse = exports.CustomObjectBulkJobResponseStatusEnum = exports.CustomObjectBulkJobResponseOperationEnum = exports.CustomObjectBulkJobResponseNamespaceEnum = exports.CustomObjectBulkJobResponseError = void 0;
var utils_1 = require("../../../internal/utils");
var CustomObjectBulkJobResponseError = /** @class */ (function (_super) {
    __extends(CustomObjectBulkJobResponseError, _super);
    function CustomObjectBulkJobResponseError() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=code" }),
        __metadata("design:type", Number)
    ], CustomObjectBulkJobResponseError.prototype, "code", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=message" }),
        __metadata("design:type", String)
    ], CustomObjectBulkJobResponseError.prototype, "message", void 0);
    return CustomObjectBulkJobResponseError;
}(utils_1.SpeakeasyBase));
exports.CustomObjectBulkJobResponseError = CustomObjectBulkJobResponseError;
var CustomObjectBulkJobResponseNamespaceEnum;
(function (CustomObjectBulkJobResponseNamespaceEnum) {
    CustomObjectBulkJobResponseNamespaceEnum["Default"] = "default";
    CustomObjectBulkJobResponseNamespaceEnum["ComZuora"] = "com_zuora";
})(CustomObjectBulkJobResponseNamespaceEnum = exports.CustomObjectBulkJobResponseNamespaceEnum || (exports.CustomObjectBulkJobResponseNamespaceEnum = {}));
var CustomObjectBulkJobResponseOperationEnum;
(function (CustomObjectBulkJobResponseOperationEnum) {
    CustomObjectBulkJobResponseOperationEnum["Delete"] = "delete";
    CustomObjectBulkJobResponseOperationEnum["Create"] = "create";
})(CustomObjectBulkJobResponseOperationEnum = exports.CustomObjectBulkJobResponseOperationEnum || (exports.CustomObjectBulkJobResponseOperationEnum = {}));
var CustomObjectBulkJobResponseStatusEnum;
(function (CustomObjectBulkJobResponseStatusEnum) {
    CustomObjectBulkJobResponseStatusEnum["Open"] = "open";
    CustomObjectBulkJobResponseStatusEnum["Pending"] = "pending";
    CustomObjectBulkJobResponseStatusEnum["InProgress"] = "in_progress";
    CustomObjectBulkJobResponseStatusEnum["Completed"] = "completed";
    CustomObjectBulkJobResponseStatusEnum["Failed"] = "failed";
    CustomObjectBulkJobResponseStatusEnum["Cancelled"] = "cancelled";
})(CustomObjectBulkJobResponseStatusEnum = exports.CustomObjectBulkJobResponseStatusEnum || (exports.CustomObjectBulkJobResponseStatusEnum = {}));
var CustomObjectBulkJobResponse = /** @class */ (function (_super) {
    __extends(CustomObjectBulkJobResponse, _super);
    function CustomObjectBulkJobResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=CreatedById" }),
        __metadata("design:type", String)
    ], CustomObjectBulkJobResponse.prototype, "createdById", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=CreatedDate" }),
        __metadata("design:type", Date)
    ], CustomObjectBulkJobResponse.prototype, "createdDate", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=Id" }),
        __metadata("design:type", String)
    ], CustomObjectBulkJobResponse.prototype, "id", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=UpdatedById" }),
        __metadata("design:type", String)
    ], CustomObjectBulkJobResponse.prototype, "updatedById", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=UpdatedDate" }),
        __metadata("design:type", Date)
    ], CustomObjectBulkJobResponse.prototype, "updatedDate", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=error" }),
        __metadata("design:type", CustomObjectBulkJobResponseError)
    ], CustomObjectBulkJobResponse.prototype, "error", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=namespace" }),
        __metadata("design:type", String)
    ], CustomObjectBulkJobResponse.prototype, "namespace", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=object" }),
        __metadata("design:type", String)
    ], CustomObjectBulkJobResponse.prototype, "object", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=operation" }),
        __metadata("design:type", String)
    ], CustomObjectBulkJobResponse.prototype, "operation", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=processingTime" }),
        __metadata("design:type", Number)
    ], CustomObjectBulkJobResponse.prototype, "processingTime", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=recordsProcessed" }),
        __metadata("design:type", Number)
    ], CustomObjectBulkJobResponse.prototype, "recordsProcessed", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=status" }),
        __metadata("design:type", String)
    ], CustomObjectBulkJobResponse.prototype, "status", void 0);
    return CustomObjectBulkJobResponse;
}(utils_1.SpeakeasyBase));
exports.CustomObjectBulkJobResponse = CustomObjectBulkJobResponse;
