package com.blogspot.dikuro.frame.web;

import org.springframework.mock.web.MockHttpServletRequest;
import org.springframework.mock.web.MockHttpServletResponse;

import com.blogspot.dikuro.frame.test.web.TestController;

import junit.framework.TestCase;

public class TestControllerTest extends TestCase {
	private TestController testController;
	private MockHttpServletRequest request = new MockHttpServletRequest();
	private MockHttpServletResponse response = new MockHttpServletResponse();
}
