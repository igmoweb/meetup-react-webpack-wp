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
			$plugin_url = plugin_dir_url( __FILE__ );
			wp_enqueue_script( 'meetup', $plugin_url . 'js/app.js', array(), '', true );
			wp_enqueue_style( 'meetup', $plugin_url . 'css/style.css');

			$init_state = array(
				'todos' => array(
					array(
						'title' => 'Hacer la compra',
						'id' => 1,
					),
					array(
						'title' => 'Médico a las 11',
						'id' => 2
					)
				)
			);

			wp_localize_script( 'meetup', 'Meetup_Init_State', $init_state );
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