package com.blogspot.dikuro.frame.cmm.aop;

import java.lang.reflect.Method;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.aop.MethodBeforeAdvice;

public class MethodBeforeLogAdvice implements MethodBeforeAdvice {

	private Logger log = LoggerFactory.getLogger(getClass());

	@Override
	public void before(Method method, Object[] args, Object target)
			throws Throwable {
		log.info("AOP MethodBefore : " + target.toString() + "." + method.toGenericString());
		System.out.println("#####################");
	}
}
