/**
 * Created by benholdstock on 10/07/2014.
 */

import cucumber.api.junit.Cucumber;
import org.junit.runner.RunWith;

@RunWith(Cucumber.class)
@Cucumber.Options(
        format={"pretty", "html:target/cucumber", "json:target/cucumber.json"},
        features="src/test/"

)


public class cukesRunner {}
