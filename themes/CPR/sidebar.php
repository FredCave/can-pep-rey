<?php
	/* QUERY FOR COLLECTIONS LIST */
	$args = array(
        'taxonomy'			=> 'product_cat',
        'orderby'			=> 'id',
		'order'				=> 'desc',
		"hide_empty" 		=> 0
    );
	$all_cats = get_categories( $args );
?>

<!-- NAVIGATION -->
<div id="nav" class="hidden" >

	<?php $cpr_title = "Can Pep Rey."; ?>

	<!-- IF IS NOT SINGLE OR COLLECTION PAGE -->
	<?php if ( !is_product() && !is_product_category() && !is_front_page() ) { ?>
		<div id="nav_bg_top"></div>
		<div id="nav_bg"></div>
	<?php } ?>

	<ul class="">

<!-- HOME LINK -->
		<li id="nav_home" class="no_break">
			<a href="<?php bloginfo( 'url' ); ?>/">
				<!-- <span class="liH"> -->Can Pep Rey.<!-- </li> -->
				<span class="break"></span>
			</a>
		</li>

		<span id="nav_dropdown" class="dropdown_hide">

<!-- COLLECTIONS -->
		<li class="nav_collection wrap" data-length="<?php echo count( $all_cats ); ?>"><a href="">Collections</a></li>

		<?php foreach ( $all_cats as $cat ) { ?>
			<li id="<?php echo $cat->slug; ?>" class="nav_collection_2 nav_hidden wrap">
				<a data-href="<?php bloginfo( 'url' ); ?>/collection/<?php echo $cat->slug; ?>"><?php echo $cat->name; ?></a>
			</li>
		<?php } ?>

<!-- NEWS -->
		<li class="wrap"><a href="<?php bloginfo( 'url' ); ?>/_news/">News</a></li>

<!-- INFORMATION -->
		<li class="wrap"><a href="<?php bloginfo( 'url' ); ?>/_information/">Information</a></li>

<!-- SOCIAL MEDIA -->
		<li class="nav_share">
			<a href="https://www.facebook.com/canpeprey/"><img class="" src="<?php bloginfo('template_url'); ?>/img/facebook_icon.svg" /></a>
			<a href=""><img id="newsletter_signup" class="" src="<?php bloginfo('template_url'); ?>/img/newsletter_icon.svg" /></a>
			<a href="https://www.instagram.com/canpeprey/"><img class="" src="<?php bloginfo('template_url'); ?>/img/instagram_icon.svg" /></a>
		</li>

		</span><!-- end of .nav_dropdown -->

	</ul>
</div>

<div id="secondary_nav">
	<ul>

		<!-- FILTER: OPTIONAL ON CATEGORY PAGES -->
		<?php if ( is_product_category() || is_front_page() ) { ?>
			<li id="secondary_filter">
				<span id="filter_toggle">Filter</span>
				<img class="clear_filter" src="<?php bloginfo( 'template_url' ); ?>/img/filter_clear.png" />
			</li>	
		<?php /* } else if ( is_single() ) { */ ?>
		<?php } else { ?>
			<li id="secondary_filter">
				<span id="filter_toggle" class="hide_filter">Filter</span>
				<img class="clear_filter" src="<?php bloginfo( 'template_url' ); ?>/img/filter_clear.png" />
			</li>
		<?php } ?>

		<!-- ACCOUNT -->	
		<li id="secondary_account"><a href="<?php bloginfo( 'url' ); ?>/my-account/">Wholesale</a></li>	


		<!-- CART -->
		<li id="secondary_cart">
			<div id="cart_container">
			    <a class="" href="<?php echo WC()->cart->get_cart_url(); ?>" title="<?php _e( 'View your shopping cart' ); ?>">
			        <?php 
			        echo WC()->cart->cart_contents_count . " / " . WC()->cart->get_cart_total(); ?>
			    </a> 
			</div>
			<!--<a href="<?php bloginfo( 'url' ); ?>/cart/">
				Cart <span class="cart_count"><?php echo "(" . WC()->cart->cart_contents_count . ") / " . WC()->cart->get_cart_total(); ?></span>
			</a>-->
		</li>

	</ul>

</div>

<div id="nav_close">
	<img src="<?php bloginfo( 'template_url' ); ?>/img/filter_clear.png" />
</div>

