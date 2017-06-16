<?php
/**
 * Plugin Name: Meetup - React + webpack
 */
add_action( 'admin_menu', function() {
	$menu_id = add_options_page(
		'Meetup plugin',
		'Meetup plugin',
		'manage_options',
		'meetup-plugin',
		'render_meetup_plugin_menu'
	);

	add_action( 'admin_enqueue_scripts', function() use ( $menu_id ) {
		$screen = get_current_screen();
		if ( $screen->id === $menu_id ) {
			wp_enqueue_script( 'meetup', plugin_dir_url( __FILE__ ) . 'js/app.js', array(), '', true );
		}
	});
});




function render_meetup_plugin_menu() {
	?>
	<div class="wrap">
		<div id="app"></div>
	</div>
	<?php
}