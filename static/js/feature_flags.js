var feature_flags = (function () {

var exports = {};

// Helpers
var special_24_hour_people= _.contains([],
    page_params.email);
var og_zuliper_emails = [];

var iceland = page_params.domain === 'customer8.invalid';

var customer4_realms = [
  'customer4.invalid',
  'users.customer4.invalid'
];
var is_customer4 = _.contains(customer4_realms, page_params.domain);

// Enterprise-related flags
exports.do_not_share_the_love = page_params.enterprise;

// Manually-flipped debugging flags
exports.log_send_times = false;
exports.collect_send_times = false;

// Permanent realm-specific stuff:
exports.disable_message_editing = _.contains(['mit.edu'], page_params.domain);
exports.is_og_zulip_user = _.contains(og_zuliper_emails, page_params.email);
exports.twenty_four_hour_time = special_24_hour_people || iceland;

exports.left_side_userlist = _.contains(['customer7.invalid'], page_params.domain);
exports.enable_new_user_app_alerts = ! _.contains(['employees.customer16.invalid'], page_params.domain);

// Still very beta:

exports.full_width = false; //page_params.staging;
exports.cleanup_before_reload = true;
exports.new_bot_ui = false; // page_params.staging;

// This list must match the list of domains in enqueue_digest_emails.
exports.dont_show_digest_email_setting = _.contains(["mit.edu", "customer29.invalid", "customer20.invalid"],
                                                    page_params.domain);

exports.fade_at_stream_granularity = page_params.staging;

// Still burning in...
exports.fade_users_when_composing = true;
exports.mark_read_at_bottom = true;
exports.propagate_topic_edits = true;
exports.clicking_notification_causes_narrow = true;
exports.use_socket = true;
exports.local_echo = true;
exports.negated_search = true;

// Ready for deprecation.
exports.collapsible = false;
exports.dropbox_integration = false;

return exports;

}());
