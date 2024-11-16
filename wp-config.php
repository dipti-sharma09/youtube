<?php
/**
 * The base configuration for WordPress
 *
 * The wp-config.php creation script uses this file during the installation.
 * You don't have to use the website, you can copy this file to "wp-config.php"
 * and fill in the values.
 *
 * This file contains the following configurations:
 *
 * * Database settings
 * * Secret keys
 * * Database table prefix
 * * ABSPATH
 *
 * @link https://developer.wordpress.org/advanced-administration/wordpress/wp-config/
 *
 * @package WordPress
 */

// ** Database settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define( 'DB_NAME', 'youtube' );

/** Database username */
define( 'DB_USER', 'root' );

/** Database password */
define( 'DB_PASSWORD', '' );

/** Database hostname */
define( 'DB_HOST', 'localhost' );

/** Database charset to use in creating database tables. */
define( 'DB_CHARSET', 'utf8mb4' );

/** The database collate type. Don't change this if in doubt. */
define( 'DB_COLLATE', '' );

/**#@+
 * Authentication unique keys and salts.
 *
 * Change these to different unique phrases! You can generate these using
 * the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}.
 *
 * You can change these at any point in time to invalidate all existing cookies.
 * This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define( 'AUTH_KEY',         'cT%]F7#Kcu0j]t!Bfi!r:Mzwl4v3Iy5mH32G9=9dl(9up?(ml=Enni2(+=ZZ,aqh' );
define( 'SECURE_AUTH_KEY',  'g8EV>l+hb>/zGKQw-R2{}E&]8#Rq36oN8T~|AG2.07bOAcb&YzbWU|mKDggEj.Z]' );
define( 'LOGGED_IN_KEY',    'Z(3SpkcZ`]P!Xov+RWNz/#-;ri!1&eT`jkXzQsTQVBz@4D>nghQ,/K,24;}<mz^,' );
define( 'NONCE_KEY',        'xBk) .>B,}d+*J:+xaV6y^aa4FpuDI6e4w34,#nB6Z(p9gS$J|il=Je^pfz@E1Pb' );
define( 'AUTH_SALT',        'mr1B}q])v_ Y#FPpBHg;O{;*S_~=U/Uw!+23_x)oJ5It;e.7l)+(^Q<0R?7^9z4k' );
define( 'SECURE_AUTH_SALT', 'kKed@*tX-!GsV|tJw*0B,Da^1a!cXRmqA2V*oSC7$Z=u.JW5[yUU`:!6Ibf=Bhdq' );
define( 'LOGGED_IN_SALT',   'k>5pdG_qe:[:JAXEVv-.^=i-0YJzVfz %>*R!4G2vjhiE?>owyM8ORK]}{UQ|zBb' );
define( 'NONCE_SALT',       'We+hdVGD}TRNT&0/]IN#$i*^IPDJj=RLd /NCgtEr!%Y?8!ib-tQR@|YBn61@MCg' );

/**#@-*/

/**
 * WordPress database table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 *
 * At the installation time, database tables are created with the specified prefix.
 * Changing this value after WordPress is installed will make your site think
 * it has not been installed.
 *
 * @link https://developer.wordpress.org/advanced-administration/wordpress/wp-config/#table-prefix
 */
$table_prefix = 'wp_youtube';

/**
 * For developers: WordPress debugging mode.
 *
 * Change this to true to enable the display of notices during development.
 * It is strongly recommended that plugin and theme developers use WP_DEBUG
 * in their development environments.
 *
 * For information on other constants that can be used for debugging,
 * visit the documentation.
 *
 * @link https://developer.wordpress.org/advanced-administration/debug/debug-wordpress/
 */
define( 'WP_DEBUG', false );

/* Add any custom values between this line and the "stop editing" line. */



/* That's all, stop editing! Happy publishing. */

/** Absolute path to the WordPress directory. */
if ( ! defined( 'ABSPATH' ) ) {
	define( 'ABSPATH', __DIR__ . '/' );
}

/** Sets up WordPress vars and included files. */
require_once ABSPATH . 'wp-settings.php';
