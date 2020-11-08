package ch.egroup.eform;

import static com.tngtech.archunit.lang.syntax.ArchRuleDefinition.noClasses;

import com.tngtech.archunit.core.domain.JavaClasses;
import com.tngtech.archunit.core.importer.ClassFileImporter;
import com.tngtech.archunit.core.importer.ImportOption;
import org.junit.jupiter.api.Test;

class ArchTest {

    @Test
    void servicesAndRepositoriesShouldNotDependOnWebLayer() {
        JavaClasses importedClasses = new ClassFileImporter()
            .withImportOption(ImportOption.Predefined.DO_NOT_INCLUDE_TESTS)
            .importPackages("ch.egroup.eform");

        noClasses()
            .that()
            .resideInAnyPackage("ch.egroup.eform.service..")
            .or()
            .resideInAnyPackage("ch.egroup.eform.repository..")
            .should()
            .dependOnClassesThat()
            .resideInAnyPackage("..ch.egroup.eform.web..")
            .because("Services and repositories should not depend on web layer")
            .check(importedClasses);
    }
}
