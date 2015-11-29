/* global _qunit_module_setup:false */
/* global $scope:false */
/* global _ctl:false */
/* global _var:false */
/* global _status:false */
module("db_profile.js", QUNIT_UTILS.module_setup("db_profile"));

test("get_uuid()", function (_assert) {
    var _done = _assert.async(1);
    var _uuid = _ctl.get_uuid();
    notEqual(_uuid, 0, _uuid);
    var _fingerprint = new Fingerprint().get();
    ok((_uuid.length < (_fingerprint + "").length), _fingerprint);
    _done();
});
