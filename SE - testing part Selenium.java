package TestSelenium;

import static org.junit.jupiter.api.Assertions.*;

import org.junit.jupiter.api.AfterAll;
import org.junit.jupiter.api.BeforeAll;
import org.junit.jupiter.api.Test;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.remote.RemoteWebDriver;
import org.openqa.selenium.support.ui.Select;
import org.openqa.selenium.JavascriptExecutor;

class Selenium {

	private static WebDriver webDriver;
	
	@BeforeAll
	public static void setUp() {
		System.setProperty("webdriver.chrome.driver", "C:\\Users\\PC\\Desktop\\chromedriver.exe");
		webDriver = new ChromeDriver();
	}
	
	/*
	@Test
	public void URLtest() throws InterruptedException {
		webDriver.get("https://angular-se1.herokuapp.com/employees");
		
		webDriver.manage().window().maximize();
		
		WebElement scrumbtn = webDriver.findElement(By.xpath("/html/body/app-root/app-employees-list/app-meni/div/a[2]"));
		scrumbtn.click();
		
		Thread.sleep(3000);
	
		assertEquals("https://angular-se1.herokuapp.com/scrum", webDriver.getCurrentUrl());
		
		webDriver.quit();
		}
*/
	
	/*
	@Test
	public void addUser() throws InterruptedException {
		webDriver.get("https://angular-se1.herokuapp.com/employees");
		
		webDriver.manage().window().maximize();
		
		WebElement inpfield = webDriver.findElement(By.xpath("/html/body/app-root/app-employees-list/div/form[1]/div/div/div[1]/div/input"));
		inpfield.sendKeys("FarisBektas");
		
		Thread.sleep(3000);
		
		WebElement add = webDriver.findElement(By.xpath("/html/body/app-root/app-employees-list/div/form[1]/div/div/div[2]/button"));
		add.click();
		
		Thread.sleep(3000);
		
		webDriver.quit();
		}
		*/
	
	
	/*
	@Test
	public void deleteUserOnID1() throws InterruptedException {
		webDriver.get("https://angular-se1.herokuapp.com/employees");
		
		webDriver.manage().window().maximize();
		
		WebElement dlt = webDriver.findElement(By.xpath("/html/body/app-root/app-employees-list/div/div[1]/div/div[1]/div/div[2]/button[2]"));
		dlt.click();
	
		webDriver.quit();
		
		}
	*/
	
	/*
	@Test
	public void searchUser() throws InterruptedException {
		webDriver.get("https://angular-se1.herokuapp.com/scrum");
		
		webDriver.manage().window().maximize();
		
		WebElement searchfield = webDriver.findElement(By.xpath("/html/body/app-root/app-daily-scrum/div/form[2]/div/div/div/div/input"));
		searchfield.sendKeys("Faris");
	


		webDriver.quit();
	}
*/
	/*
	@Test
	public void editUser() throws InterruptedException {
		webDriver.get("https://angular-se1.herokuapp.com/employees");
		
		webDriver.manage().window().maximize();
		
		WebElement edit = webDriver.findElement(By.xpath("/html/body/app-root/app-employees-list/div/div[1]/div/div[1]/div/div[2]/button[1]"));
		edit.click();
		
		Thread.sleep(3000);
		
		WebElement field = webDriver.findElement(By.xpath("/html/body/app-root/app-employees-list/div/div[1]/div/div[1]/div/div[1]/div/div/input"));
		field.sendKeys("FarisBektas");
		
		Thread.sleep(1000);
		
		WebElement save = webDriver.findElement(By.xpath("/html/body/app-root/app-employees-list/div/div[1]/div/div[1]/div/div[2]/button[1]"));
		save.click();
		
		webDriver.quit();
		
		}
	*/
	
	
}
