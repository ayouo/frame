package com.blogspot.dikuro.frame.cmm.aop;

import org.aopalliance.intercept.MethodInterceptor;
import org.aopalliance.intercept.MethodInvocation;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

public class MethodInterceptorLogAdvice implements MethodInterceptor {
	
	private Logger log = LoggerFactory.getLogger(getClass());

	@Override
	public Object invoke(MethodInvocation invocation) throws Throwable {
		log.info("AOP MethodInterceptor : " + invocation.getClass().getName() + "." + invocation.getMethod().getName() + " calling");
		Object returnValue = invocation.proceed();
		log.info("AOP MethodInterceptor : " + invocation.getClass().getName() + "." + invocation.getMethod().getName() + " return");
		
		
		
		return returnValue;
	}

}
