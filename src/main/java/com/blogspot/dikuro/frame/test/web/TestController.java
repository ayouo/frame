package com.blogspot.dikuro.frame.test.web;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

import com.blogspot.dikuro.frame.test.service.TestService;

@Controller
public class TestController {
	
	@Autowired
	private TestService testService;
	
	@RequestMapping("test.do")
	public void test() throws Exception {
		System.out.println("Method Call: TestController.test");
		String t = testService.test();
	}

}
