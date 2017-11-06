<?php
namespace Elementor;

if ( ! defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly.
}

class Group_Control_Text_Shadow extends Group_Control_Base {

	protected static $fields;

	/**
	 * @static
	 * @since 1.6.0
	 * @access public
	*/
	public static function get_type() {
		return 'text-shadow';
	}

	/**
	 * @since 1.6.0
	 * @access protected
	*/
	protected function init_fields() {
		$controls = [];

		$controls['text_shadow'] = [
			'label' => _x( 'Text Shadow', 'Text Shadow Control', 'elementor' ),
			'type' => Controls_Manager::TEXT_SHADOW,
			'condition' => [
				'text_shadow_type!' => '',
			],
			'selectors' => [
				'{{SELECTOR}}' => 'text-shadow: {{HORIZONTAL}}px {{VERTICAL}}px {{BLUR}}px {{COLOR}};',
			],
		];

		return $controls;
	}

	protected function get_default_options() {
		return [
			'popup' => [
				'starter_title' => _x( 'Text Shadow', 'Text Shadow Control', 'elementor' ),
				'starter_name' => 'text_shadow_type',
				'starter_value' => 'yes',
			],
		];
	}
}
