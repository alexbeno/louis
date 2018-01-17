<?php
/**
 * La configuration de base de votre installation WordPress.
 *
 * Ce fichier contient les réglages de configuration suivants : réglages MySQL,
 * préfixe de table, clés secrètes, langue utilisée, et ABSPATH.
 * Vous pouvez en savoir plus à leur sujet en allant sur
 * {@link http://codex.wordpress.org/fr:Modifier_wp-config.php Modifier
 * wp-config.php}. C’est votre hébergeur qui doit vous donner vos
 * codes MySQL.
 *
 * Ce fichier est utilisé par le script de création de wp-config.php pendant
 * le processus d’installation. Vous n’avez pas à utiliser le site web, vous
 * pouvez simplement renommer ce fichier en "wp-config.php" et remplir les
 * valeurs.
 *
 * @package WordPress
 */

// ** Réglages MySQL - Votre hébergeur doit vous fournir ces informations. ** //
/** Nom de la base de données de WordPress. */

require_once(__DIR__ . '/vendor/autoload.php');
(new \Dotenv\Dotenv(__DIR__.'/'))->load();

define('DB_NAME', getenv('DB_NAME'));

/** Utilisateur de la base de données MySQL. */
define('DB_USER', getenv('DB_USER'));

/** Mot de passe de la base de données MySQL. */
define('DB_PASSWORD', getenv('DB_PASSWORD'));

/** Adresse de l’hébergement MySQL. */
define('DB_HOST', getenv('DB_HOST'));

/** Jeu de caractères à utiliser par la base de données lors de la création des tables. */
define('DB_CHARSET', 'utf8mb4');

/** Type de collation de la base de données.
  * N’y touchez que si vous savez ce que vous faites.
  */
define('DB_COLLATE', '');

/**#@+
 * Clés uniques d’authentification et salage.
 *
 * Remplacez les valeurs par défaut par des phrases uniques !
 * Vous pouvez générer des phrases aléatoires en utilisant
 * {@link https://api.wordpress.org/secret-key/1.1/salt/ le service de clefs secrètes de WordPress.org}.
 * Vous pouvez modifier ces phrases à n’importe quel moment, afin d’invalider tous les cookies existants.
 * Cela forcera également tous les utilisateurs à se reconnecter.
 *
 * @since 2.6.0
 */
define('AUTH_KEY',         'efxrjR:#$?H:2:*ShDw~WvR&EN>G,o%tTazUoEdRajS2wO4D;YqZUl?MnpgN;~!h');
define('SECURE_AUTH_KEY',  'pUz&RGbF0T{Ch`5}hD=r2IH?|Oy+BJOEX1f.pfGvvVW#LPu-u.N,<H)i)2oI0teV');
define('LOGGED_IN_KEY',    'MaM]f 7}/`),v-i%?0r884oJ5f|dG`!S~fOz7wv3e #X?N+Z[nvar[d]_auI;HcD');
define('NONCE_KEY',        'ObiZjA7FIvVZ>eo_$`-jn3-hA/[zw8+?:?L.PJ-e*?aXF?JW~4OaIf/HD0zdOpwR');
define('AUTH_SALT',        '* T(z%OtIjUv@<qn{*Xhkdj;%U0%H#Mx{:f;D0iDlrj_UjgcAl#TiApY.l!`xz;|');
define('SECURE_AUTH_SALT', '8NBkaTR=dIYT7r1*FA}_TNa=Bb8.EsGAST?EuZo,b`qyPN^:NRX@csqZpp@8|OPF');
define('LOGGED_IN_SALT',   'F/rG8215W!s(B6:VD@(nIG3}&3[9rA=VVmMf{9^a=]?P&p#h`|m4?Tg{^$YrK8 )');
define('NONCE_SALT',       '3AMzwX@+1Bj7k%#O`+CsQpe^7}Nf1R|M]C~Ki#TQ_n4P>D:9W,C#/UVnF+{%Tb2@');
/**#@-*/

/**
 * Préfixe de base de données pour les tables de WordPress.
 *
 * Vous pouvez installer plusieurs WordPress sur une seule base de données
 * si vous leur donnez chacune un préfixe unique.
 * N’utilisez que des chiffres, des lettres non-accentuées, et des caractères soulignés !
 */
$table_prefix  = getenv('DB_PREFIX');

/**
 * Pour les développeurs : le mode déboguage de WordPress.
 *
 * En passant la valeur suivante à "true", vous activez l’affichage des
 * notifications d’erreurs pendant vos essais.
 * Il est fortemment recommandé que les développeurs d’extensions et
 * de thèmes se servent de WP_DEBUG dans leur environnement de
 * développement.
 *
 * Pour plus d’information sur les autres constantes qui peuvent être utilisées
 * pour le déboguage, rendez-vous sur le Codex.
 *
 * @link https://codex.wordpress.org/Debugging_in_WordPress
 */
define('WP_DEBUG', false);

/* C’est tout, ne touchez pas à ce qui suit ! */

/** Chemin absolu vers le dossier de WordPress. */
if ( !defined('ABSPATH') )
	define('ABSPATH', dirname(__FILE__) . '/');

/** Réglage des variables de WordPress et de ses fichiers inclus. */
require_once(ABSPATH . 'wp-settings.php');