from selenium import webdriver
from selenium.webdriver.common.by import By
import time

driver = webdriver.Chrome()

# Open App
driver.get("http://localhost:5000")

# TEST CASE 1: Valid Registration
driver.find_element(By.ID, "name").send_keys("Sai")
driver.find_element(By.ID, "email").send_keys("sai@test.com")
driver.find_element(By.TAG_NAME, "button").click()

time.sleep(3)

assert "Registration Successful" in driver.page_source
print("Test Case 1 Passed")

driver.back()

# TEST CASE 2: Empty Fields
driver.find_element(By.ID, "name").clear()
driver.find_element(By.ID, "email").clear()
driver.find_element(By.TAG_NAME, "button").click()

time.sleep(3)

assert "Error" in driver.page_source
print("Test Case 2 Passed")

driver.quit()