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
exports.DataQueryJobCancelled = exports.DataQueryJobCancelledQueryStatusEnum = void 0;
var utils_1 = require("../../../internal/utils");
var DataQueryJobCancelledQueryStatusEnum;
(function (DataQueryJobCancelledQueryStatusEnum) {
    DataQueryJobCancelledQueryStatusEnum["Cancelled"] = "cancelled";
})(DataQueryJobCancelledQueryStatusEnum = exports.DataQueryJobCancelledQueryStatusEnum || (exports.DataQueryJobCancelledQueryStatusEnum = {}));
// DataQueryJobCancelled
/**
 * A cancelled data query job.
 *
**/
var DataQueryJobCancelled = /** @class */ (function (_super) {
    __extends(DataQueryJobCancelled, _super);
    function DataQueryJobCancelled() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=createdBy" }),
        __metadata("design:type", String)
    ], DataQueryJobCancelled.prototype, "createdBy", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=id" }),
        __metadata("design:type", String)
    ], DataQueryJobCancelled.prototype, "id", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=query" }),
        __metadata("design:type", String)
    ], DataQueryJobCancelled.prototype, "query", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=queryStatus" }),
        __metadata("design:type", String)
    ], DataQueryJobCancelled.prototype, "queryStatus", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=remainingRetries" }),
        __metadata("design:type", Number)
    ], DataQueryJobCancelled.prototype, "remainingRetries", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=updatedOn" }),
        __metadata("design:type", Date)
    ], DataQueryJobCancelled.prototype, "updatedOn", void 0);
    return DataQueryJobCancelled;
}(utils_1.SpeakeasyBase));
exports.DataQueryJobCancelled = DataQueryJobCancelled;
