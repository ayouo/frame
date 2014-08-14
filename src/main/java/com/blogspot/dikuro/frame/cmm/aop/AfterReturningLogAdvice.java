package com.blogspot.dikuro.frame.cmm.aop;

import java.lang.reflect.Method;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.aop.AfterReturningAdvice;

public class AfterReturningLogAdvice implements AfterReturningAdvice {
	
	private Logger log = LoggerFactory.getLogger(getClass());

	@Override
	public void afterReturning(Object retrunValue, Method method, Object[] args,
			Object target) throws Throwable {
		log.info("AOP AfterReturning : " + target.toString() + "." + method.toString());
		
	}

}
