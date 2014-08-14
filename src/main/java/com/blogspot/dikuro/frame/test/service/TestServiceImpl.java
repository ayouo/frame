package com.blogspot.dikuro.frame.test.service;

import org.springframework.stereotype.Service;

@Service("testService")
public class TestServiceImpl implements TestService {

	@Override
	public String test() {
		System.out.println("TestSErviceImpl.test()");
		return "test";
	}
	
}
