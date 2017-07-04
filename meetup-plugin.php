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
				'apiUrl' => esc_url_raw( rest_url( 'wp/v2' ) ),
				'apiNonce' => wp_create_nonce( 'wp_rest' )
			);

			wp_localize_script( 'meetup', 'Meetup_Init_State', $init_state );
		}
	});
});


add_action( 'init', function() {
	register_post_type( 'todo', array(
		'description'         => 'Todos',
		'labels'              => array(
			'name'               => _x( 'Todos', 'post type general name', 'todo' ),
			'singular_name'      => _x( 'Todo', 'post type singular name', 'todo' ),
			'menu_name'          => _x( 'Todos', 'admin menu', 'todo' ),
			'name_admin_bar'     => _x( 'Todo', 'add new todo on admin bar', 'todo' ),
			'add_new'            => _x( 'Add New', 'post_type', 'todo' ),
			'add_new_item'       => __( 'Add New Todo', 'todo' ),
			'edit_item'          => __( 'Edit Todo', 'todo' ),
			'new_item'           => __( 'New Todo', 'todo' ),
			'view_item'          => __( 'View Todo', 'todo' ),
			'search_items'       => __( 'Search Todos', 'todo' ),
			'not_found'          => __( 'No todos found.', 'todo' ),
			'not_found_in_trash' => __( 'No todos found in Trash.', 'todo' ),
			'parent_item_colon'  => __( 'Parent Todo:', 'todo' ),
			'all_items'          => __( 'All Todos', 'todo' ),
		),
		'public'              => false,
		'hierarchical'        => false,
		'exclude_from_search' => true,
		'publicly_queryable'  => false,
		'show_ui'             => true,
		'show_in_menu'        => true,
		'show_in_nav_menus'   => false,
		'show_in_admin_bar'   => false,
		'menu_position'       => null,
		'menu_icon'           => null,
		'capability_type'     => 'post',
		'capabilities'        => array(),
		'map_meta_cap'        => null,
		'supports'            => array( 'title' ),
		'has_archive'         => false,
		'show_in_rest'        => true
	) );
});




function render_meetup_plugin_menu() {
	?>
	<div class="wrap">
		<div id="app">Loading...</div>
	</div>
	<?php
}